import fs from 'fs';

import { listCPE, listCPERelocate, listCPE_TW, listCPERelocate_TW } from './data/cpe';
import { listWifiRouter, listWifiRouterRelocate } from './data/wifi-router';
import { listAISPLAYBOX, listAISPLAYBOXRelocate } from './data/ais-playbox';
import { listCancel } from './data/cancel';

// RUN file
// ts-node test_fn.ts
export class TestFn {
    gAppUseMode: string = "return";
    // gAppUseMode: string = "cancel";

    isSuccess: boolean = false;
    countUpdate = 0;

    deviceListUpdate: any[] = []
    currentFileName: string = "";

    exportCsv: any = {
        "R_CPERelocate": [...listCPERelocate].map((e: any) => ({ ...e })),
        // "R_CPERelocate_TW": [...listCPERelocate_TW].map((e: any) => ({ ...e })),
        // "R_WifiRouterRelocate": [...listWifiRouterRelocate].map((e: any) => ({ ...e })),
        // "R_AISPLAYBOXRelocate": [...listAISPLAYBOXRelocate].map((e: any) => ({ ...e })),
        // "G_CPE": [...listCPE].map((e: any) => ({ ...e })),
        // "G_CPE_TW": [...listCPE_TW].map((e: any) => ({ ...e })),
        // "G_WifiRouter": [...listWifiRouter].map((e: any) => ({ ...e })),
        // "G_AISPLAYBOX": [...listAISPLAYBOX].map((e: any) => ({ ...e })),
        // "Cancel": [...listCancel].map((e: any) => ({ ...e })),
    }

    delay = (time: number) => new Promise(res => setTimeout(res, time));

    async exportCsvAll() {
        for await (const fileName of Object.keys(this.exportCsv)) {
            await this.delay(300);
            this.currentFileName = fileName;
            this.deviceListUpdate = [...this.exportCsv[fileName].map((e: any) => ({ ...e, apis: [] }))];
            console.log(`${this.currentFileName}------------------------------------------------------------------`)
            await this.stepWaveAndUpdate()
            await this.logDeviceInfo();
            await this.delay(300);
            console.log(`End------------------------------------------------------------------\n\n`)
        }
    }
    async stepWaveAndUpdate() {
        let successFull = true;
        let nextItem = true;
        const self = this;
        const appUseMode = this.gAppUseMode;
        // console.log('deviceListUpdate => ', this.deviceListUpdate);
        if (this.deviceListUpdate.length <= 0) return;
        if (this.countUpdate === this.deviceListUpdate.length - 1) { nextItem = false; };
        // const finishLoop = this.deviceListUpdate.forEach(async(item, index) => {
        const i = this.countUpdate;
        // console.log('deviceListUpdate => ', self.deviceListUpdate[i]);
        // console.log('deviceDefaultList => ', self.deviceDefaultList);
        // status เดิม = inactive
        // date > 1/7/2019
        // มี PENALTY_PRODUCT_CODE
        // มีค่า PENALTY > 0 ,
        // update เป็น return , inactive not paid
        let found_deleteOTC = {};
        if (
            this.deviceListUpdate[i].OLD_STATUS_DESC === 'Inactive' &&
            this.checkRegisterDate(this.deviceListUpdate[i].REGISTER_DATE) &&
            this.deviceListUpdate[i].PENALTY_PRODUCT_CODE &&
            +this.deviceListUpdate[i].PENALTY > 0) {

            console.log('OLD_STATUS_DESC => ', this.deviceListUpdate[i].OLD_STATUS_DESC);

            if (this.deviceListUpdate[i].STATUS_DESC === 'Return' || this.deviceListUpdate[i].STATUS_DESC === 'Inactive not Paid' || this.deviceListUpdate[i].STATUS_DESC === 'Inactive') {
                console.log('STATUS_DESC => ', this.deviceListUpdate[i].STATUS_DESC);
                found_deleteOTC = this.deviceListUpdate[i];
            }
        }

        console.log('found_deleteOTC => ', found_deleteOTC);

        console.log('checkRegisterDate => ', this.checkRegisterDate(this.deviceListUpdate[i].REGISTER_DATE));

        // this.pageLoadingService.openLoading();
        this.isSuccess = true;
        let isUpdateCpe = false;
        let checkPromo: any;
        let checkService: any;
        // const profileStatus = await this.getCustomerProfileObject();
        const profileStatus: any = await this.getCustomerProfileObject();
        const relocateState = profileStatus.relocateState;

        // ==========================================================
        // console.log("--------------------- [relocateState]: ", relocateState, " ---------------------");
        console.log(`addData [${i}]------------------------------------------------------------------`)
        this.addData(appUseMode, relocateState)
        //  ==========================================================

        if (appUseMode === 'return' || appUseMode == 'wttx') {
            // console.log('profile object => ', this.getCustomerProfileObject());
            // const relocateState = localStorage.getItem("relocateState");
            console.log('Relocate Status => ', relocateState);
            if (relocateState === 'Relocation') {
                console.log('======== update CPE only =========== ');
                // nothing
                // if (Object.keys(found_deleteOTC).length > 0) {
                //   await self.newOnChangeDeleteOTC(found_deleteOTC);
                // }

                // isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                // await self.saveTransection('00',self.deviceListUpdate[i].SERIAL_NO);


                let statusDesc = self.deviceListUpdate[i].STATUS_DESC.toLowerCase();
                let statusOldDesc = self.deviceListUpdate[i].OLD_STATUS_DESC.toLowerCase();

                let condFlag = self.deviceListUpdate[i].newlocationFlag;
                let rType = self.deviceListUpdate[i].CPE_TYPE_MAP.toLowerCase();

                console.log('statusDesc =>', statusDesc);
                console.log('statusOldDesc =>', statusOldDesc);
                console.log('CPE_TYPE_MAP =>', rType);
                console.log('newlocationFlag =>', condFlag);


                if (rType === 'ais playbox' && statusOldDesc === 'in service') {

                    console.log('device type playbox ');

                    if (condFlag === 'Y' && (statusDesc === "return" || statusDesc === "inactive" || statusDesc === "inactive not paid")) {

                        console.log('check condition 1');
                        checkService = await self.newOnChangeServiceCallApi(self.deviceListUpdate[i]);
                        console.log('checkService => ', checkService);

                        if (checkService) {
                            isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                            console.log('updateCPE ', isUpdateCpe);
                            if (isUpdateCpe) {
                                await self.saveTransection('02', self.deviceListUpdate[i].SERIAL_NO);
                            }
                        } else {
                            nextItem = false;
                            successFull = false;
                        }
                    } else if (condFlag === 'N' && (statusDesc === "return" || statusDesc === "inactive" || statusDesc === "inactive not paid")) {

                        console.log('check condition 2');
                        isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                        console.log('updateCPE ', isUpdateCpe);
                        if (isUpdateCpe) {
                            await self.saveTransection('02', self.deviceListUpdate[i].SERIAL_NO);
                        }

                    }

                } else if (rType === 'wifi router' && self.deviceListUpdate[i].SN_PATTERN === "R") {
                    console.log('device type router');

                    if (statusOldDesc === 'in service' && (statusDesc === 'return' || statusDesc === 'inactive' || statusDesc === 'inactive not paid')) {
                        console.log('check condition router');
                        if (condFlag === 'Y') {
                            console.log('check condition 1');
                            checkPromo = await self.newOnChangePromotion(self.deviceListUpdate[i]);
                            console.log('checkPromo => ', checkPromo)
                            if (checkPromo) {
                                isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                                await self.saveTransection('01', self.deviceListUpdate[i].SERIAL_NO);

                            } else {
                                nextItem = false;
                                successFull = false;
                            }

                        } else if (condFlag === 'N') {
                            console.log('check condition 2');

                            isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                            console.log('updateCPE ', isUpdateCpe);
                            if (isUpdateCpe) {
                                await self.saveTransection('02', self.deviceListUpdate[i].SERIAL_NO);
                            }
                        }


                    } else if (statusOldDesc === 'inactive' && (statusDesc === 'return' || statusDesc === 'inactive not paid')) {

                        console.log('check condition 3, 4');

                        if (condFlag === 'Y' || condFlag === 'N') {
                            if (Object.keys(found_deleteOTC).length > 0) {
                                await self.newOnChangeDeleteOTC(found_deleteOTC);
                            }

                            await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                            await self.saveTransection('01', self.deviceListUpdate[i].SERIAL_NO);

                        }

                    }

                } else if (rType === 'wifi router' && self.deviceListUpdate[i].SN_PATTERN === "B") {
                    if (self.deviceListUpdate[i].OLD_STATUS_DESC === 'In service' && this.checkRegisterDate(this.deviceListUpdate[i].REGISTER_DATE)) {
                        checkPromo = await self.newOnChangePromotion(self.deviceListUpdate[i]);
                        console.log('checkPromo => ', checkPromo)
                        if (checkPromo) {
                            isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                            await self.saveTransection('00', self.deviceListUpdate[i].SERIAL_NO);

                        } else {
                            nextItem = false;
                            successFull = false;
                        }
                    }
                    // else if (Object.keys(found_deleteOTC).length > 0) {
                    //     await self.newOnChangeDeleteOTC(found_deleteOTC);
                    // }
                    else {

                        isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                        await self.saveTransection('00', self.deviceListUpdate[i].SERIAL_NO);
                    }
                } else {
                    if (Object.keys(found_deleteOTC).length > 0) {
                        await self.newOnChangeDeleteOTC(found_deleteOTC);
                    }
                    if (self.deviceListUpdate[i].SN_PATTERN === "B" && statusOldDesc === 'in service'
                        && this.checkRegisterDate(this.deviceListUpdate[i].REGISTER_DATE) && self.deviceListUpdate[i].STATUS_DESC === 'Inactive') {
                        checkService = await self.newOnChangeServiceCallApi(self.deviceListUpdate[i]);
                        if (checkService) {
                            isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                            console.log('updateCPE ', isUpdateCpe);
                            if (isUpdateCpe) {
                                await self.saveTransection('00', self.deviceListUpdate[i].SERIAL_NO);
                            }
                        } else {
                            nextItem = false;
                            successFull = false;
                        }
                    } else {
                        isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                        await self.saveTransection('00', self.deviceListUpdate[i].SERIAL_NO);
                    }
                }
            } else {
                if (self.deviceListUpdate[i].CPE_TYPE_MAP.toLowerCase() === 'wifi router' && self.deviceListUpdate[i].SN_PATTERN === 'R') {

                    console.log('wifi router => B')
                    if (self.deviceListUpdate[i].OLD_STATUS_DESC === 'Inactive' && self.deviceListUpdate[i].STATUS_DESC === 'Inactive') {
                        //nothing
                    } else if (Object.keys(found_deleteOTC).length > 0) {
                        await self.newOnChangeDeleteOTC(found_deleteOTC);
                    }
                    checkPromo = await self.newOnChangePromotion(self.deviceListUpdate[i]);
                    console.log('checkPromo => ', checkPromo)
                    if (checkPromo) {
                        isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                        await self.saveTransection('01', self.deviceListUpdate[i].SERIAL_NO);

                    } else {
                        nextItem = false;
                        successFull = false;
                    }

                    // console.log('wifi router', self.deviceListUpdate[i]);

                } else if (self.deviceListUpdate[i].CPE_TYPE_MAP.toLowerCase() === 'ais playbox') {
                    if (self.deviceListUpdate[i].CPE_TYPE_MAP.toLowerCase() === 'ais playbox' && self.deviceListUpdate[i].SN_PATTERN === 'S') {
                        //nothing
                    } else {
                        if ((profileStatus.status !== 'Disconnect - Terminate' && profileStatus.status !== 'Disconnect - Customer Request') ||
                            (profileStatus.orderStatus !== 'Disconnect - Terminate' && profileStatus.orderStatus !== 'Disconnect - Customer Request')) {

                            if (self.deviceListUpdate[i].OLD_STATUS_DESC === 'Inactive' && self.deviceListUpdate[i].STATUS_DESC === 'Inactive') {
                                //nothing
                            } else if (Object.keys(found_deleteOTC).length > 0) {
                                await self.newOnChangeDeleteOTC(found_deleteOTC);
                            }

                            checkService = await self.newOnChangeServiceCallApi(self.deviceListUpdate[i]);

                            if (checkService) {
                                isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                                if (isUpdateCpe) {
                                    await self.saveTransection('02', self.deviceListUpdate[i].SERIAL_NO);
                                }
                            } else {
                                nextItem = false;
                                successFull = false;
                            }

                        } else {
                            if (self.deviceListUpdate[i].OLD_STATUS_DESC === 'Inactive' && self.deviceListUpdate[i].STATUS_DESC === 'Inactive') {
                                //nothing
                            } else if (Object.keys(found_deleteOTC).length > 0) {
                                await self.newOnChangeDeleteOTC(found_deleteOTC);
                            }
                            isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                            await self.saveTransection('023', self.deviceListUpdate[i].SERIAL_NO);
                        }
                    }
                } else if (self.deviceListUpdate[i].CPE_TYPE_MAP.toLowerCase() === 'wifi router' && self.deviceListUpdate[i].SN_PATTERN === 'B'
                    && self.deviceListUpdate[i].OLD_STATUS_DESC === 'In service' && self.deviceListUpdate[i].STATUS_DESC === 'Inactive'
                    && this.checkRegisterDate(this.deviceListUpdate[i].REGISTER_DATE)) {
                    checkPromo = await self.newOnChangePromotion(self.deviceListUpdate[i]);
                    console.log('checkPromo => ', checkPromo)
                    if (checkPromo) {
                        isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                        await self.saveTransection('03', self.deviceListUpdate[i].SERIAL_NO);

                    } else {
                        nextItem = false;
                        successFull = false;
                    }
                } else {
                    // wifi ที่ SN_PATTERN ไม่เท่ากับ 'R'หรือ CPE
                    if (self.deviceListUpdate[i].OLD_STATUS_DESC === 'Inactive' && self.deviceListUpdate[i].STATUS_DESC === 'Inactive') {
                        //nothing
                    } else if (Object.keys(found_deleteOTC).length > 0) {
                        await self.newOnChangeDeleteOTC(found_deleteOTC);
                    }
                    // if (self.deviceListUpdate[i].STATUS_DESC === 'Inactive' && this.checkRegisterDate(this.deviceListUpdate[i].REGISTER_DATE)) {
                    //     checkPromo = await self.newOnChangePromotion(self.deviceListUpdate[i]);
                    //     console.log('checkPromo => ', checkPromo)
                    //     if (checkPromo) {
                    //         isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                    //         await self.saveTransection('03', self.deviceListUpdate[i].SERIAL_NO);
                    //     } else {
                    //         nextItem = false;
                    //         successFull = false;
                    //     }
                    // }
                    isUpdateCpe = await self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
                    await self.saveTransection('03', self.deviceListUpdate[i].SERIAL_NO);
                }
            }

        } else if (appUseMode === 'cancel') {

            /**
             * 17-05-2022 : flow cancel ONU pattern sale/S when summit send api  updateCpeInfo and  suspendReconnect,
             * updateCpeInfo send status 15
             * fbbid 8850073066 
             */
            console.log('update cancel => ', self.deviceListUpdate[i]);
            if (Object.keys(found_deleteOTC).length > 0) {
                await self.newOnChangeDeleteOTC(found_deleteOTC);
            }

            isUpdateCpe = await this.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO);
            console.log('isUpdateCpe => ', isUpdateCpe);
        }

        if (isUpdateCpe) {
            // this.myChannelFbbService.setCustomerDeviceObjectSuccessUpdate(self.deviceListUpdate[i].SERIAL_NO)
        }

        this.countUpdate++;
        if (nextItem) {
            await this.stepWaveAndUpdate();
        } else {

            if (appUseMode === 'cancel') {
                // console.log('check call suspend = ', self.callSuspend);
                const suspend = await this.confirmSusspend(0);
                if (!suspend) {
                    self.deviceListUpdate.forEach((d) => {
                        // this.myChannelFbbService.setCustomerDeviceObjectFailUpdate(d.SERIAL_NO);
                    });
                }
                console.log('suspend => ', suspend);

            } else if (successFull) {
                // self.callPopup('อัพเดทสถานะ คืนอุปกรณ์ และ AIS PLAYBOX สำเร็จ');
            }

            // self.setRouteLink('../' + environment.appPath + '/' + appUseMode, 'href', self.route);
            // localStorage.removeItem("dummySerial");
            // console.log('clear dummySerial');
            // this.pageLoadingService.closeLoading();
            this.countUpdate = 0;
        }

        // });
    }


    // =========================================================================================

    // [Return][1]
    // [Cancel][1]
    async newStepUpdateCpe(value: any) {
        console.log(`newStepUpdateCpe [${this.countUpdate}]------------------------------------------------------------------`)
        // console.log("[API][newStepUpdateCpe]");
        // console.log("[API][UpdateCpe] ", value)
        this.setAPI("updateCpeInfo")
        return true;
    }

    // [Return][2]
    // [Cancel][2]
    async newOnChangeDeleteOTC(value: any) {
        console.log(`newOnChangeDeleteOTC [${this.countUpdate}]------------------------------------------------------------------`)
        // console.log("[API][newOnChangeDeleteOTC]");
        // console.log("[API][newOnChangeDeleteOTC] ", value)
        this.setAPI("deleteOTCListService")
    }

    // [Return][3]
    newOnChangeServiceCallApi(value: any) {
        console.log(`newOnChangeServiceCallApi [${this.countUpdate}]------------------------------------------------------------------`)
        // console.log("[API][newOnChangeServiceCallApi]");
        // console.log("[API][newOnChangeServiceCallApi] ", value);
        this.setAPI("createOrderChangeService")
        return true;
    }

    // =========================================================================================
    async setStatusReturn(data: any) {
        let deviceList = await data.filter(async (data: any) => {
            if (data.RESULT === true && data.REASON === "Normal") {
                // set status return only case insert device
                data['OLD_STATUS'] = data.STATUS;
                data['OLD_STATUS_DESC'] = this.statusMapping[data.STATUS];

                data.STATUS = '11'
                data.STATUS_DESC = 'Return'
                return await data;
            } else {
                data['OLD_STATUS'] = data.STATUS;
                data['OLD_STATUS_DESC'] = this.statusMapping[data.STATUS];

                data.STATUS = this.reasonMappingList[data.REASON]?.status_value;
                data.STATUS_DESC = this.statusMapping[data.STATUS];
                return await data;
            }
        });
        return deviceList;
    }

    checkRegisterDate(date: string) {
        const registerDate = new Date(date);
        const fixDate = new Date("2019-07-01");
        return registerDate > fixDate;
    }

    async saveTransection(state: any, serialNo: any) {
        console.log(`saveTransection [${this.countUpdate}]------------------------------------------------------------------`)
        // console.log("[API][saveTransection]");
        // console.log("[API][saveTransection] ", serialNo, " :: ", state);
        this.setAPI("addCpeAccessory (saveTransection)")
    }

    async newOnChangePromotion(data: any) {
        console.log(`newOnChangePromotion [${this.countUpdate}]------------------------------------------------------------------`)
        // console.log("[API][newOnChangePromotion]");
        // console.log("[API][newOnChangePromotion] ", data);
        this.setAPI("createOrderChangePromotion")
        return {};
    }

    confirmSusspend(value: any) {
        console.log(`confirmSusspend [${this.countUpdate}]------------------------------------------------------------------`)
        // console.log("[API][confirmSusspend]");
        // console.log("[API][suspendReconnect] ", value)
        this.setAPI("suspendReconnect", true)
        return {};
    }

    getCustomerProfileObject() {
        return {
            // Used =======================================
            // "relocateState": "-",
            "relocateState": "Relocation",
            "status": "Active",
            "orderStatus": "",
            // =======================================
            "IVRLang": "THA",
            "PRODUCT_CODE_SET": [],
            "PRODUCT_MeshOntop": [
                {
                    "endDt": "08/03/2033 00:00:00",
                    "productCode": "P200802127",
                    "productName": "MESH WiFi Monthly Service Fee 100 THB",
                    "productSeq": "10",
                    "startDt": "08/02/2023 12:49:30"
                }
            ],
            "SMSLang": "THA",
            "USSDLang": "THA",
            "accntSpecialGroup": "-",
            "baNo": "32300050421969",
            "caName": "ภัทร ชัยภูมิ",
            "caNo": "32300050421968",
            "contactMobileNo": "096-197-9405",
            "contactMobileNo2": "-",
            "contactMobileNo2Segment": "-",
            "contactMobileNo2Status": "-",
            "contactMobileNo3": "-",
            "contactMobileNo3Segment": "-",
            "contactMobileNo3Status": "-",
            "contactMobileNoSegment": "-",
            "contactMobileNoStatus": "Non-AIS",
            "email": "-",
            "installAddress": "48 หมู่9 โคกกรวด เมืองนครราชสีมา นครราชสีมา 30280",
            "mobileNo": "8850112953",
            "playboxBundling": "-",
            "productShortNameEng": "BROADBAND24 Package 500/500 Mbps 599THB/month",
            "productShortNameThai": "แพ็กเกจ BROADBAND24 500/500 Mbps 599บาท/เดือน",
            "promotionMain": "BROADBAND24 II Package 500/500 Mbps 599 THB 24 months",
            "promotionMainEndDate": "08/02/2025 00:00:00",
            "promotionMainStartDate": "07/02/2023 16:16:54",
            "registeredDate": "07/02/2023 16:16:53",
            "segment": "Classic",
            "serviceLevel": "L",
            "serviceType": "FTTH",
            "serviceYear": "0 Year 3 Months",
            "setPlaboxbundling": 0,
            "statusDate": "07/02/2023 16:17:05",
            "statusMap": "Active",
            "statusReason": "956-มีความต้องการใช้ Promotion Package",
            "technology": "FTTH"
        };
    }

    statusMapping: any = {
        '0': 'Available',
        '4': 'In Service',
        '10': 'Out of Service',
        '11': 'Return',
        '12': 'Inactive',
        '13': 'Inactive Paid',
        '14': 'Expect Lost',
        '15': 'Inactive not Paid',
        '99': 'Delete'
    }

    reasonMappingList: any = {
        Normal: {
            no: "Normal",
            name: "ลูกค้าส่งมอบอุปกรณ์คืน",
            status_value: "11"
        },
        BeforeOsc: {
            no: "BeforeOsc",
            name: "ลูกค้าสมัครก่อนวันที่กำหนดให้มีการคิดค่าเสียหายอุปกรณ์",
            status_value: "15"
        },
        BelowFiveYears: {
            no: "BelowFiveYears",
            name: "สงวนรักษาลูกค้า (ใช้งานมาน้อยกว่า <5 ปี)",
            status_value: "15"
        },
        MoreThanFiveYears: {
            no: "MoreThanFiveYears",
            name: "สงวนรักษาลูกค้า (ใช้งานมาน้อยกว่า >=5  ปี)",
            status_value: "15"
        },
        Empowerment: {
            no: "Empowerment",
            name: "ลูกค้ายืนยันว่าไม่เคยได้รับอุปกรณ์นี้",
            status_value: "15"
        },
        CantReturn: {
            no: "CantReturn",
            name: "ลูกค้าไม่สามารถนำอุปกรณ์มาคืนได้",
            status_value: "12"
        },
        'CustomerEquipment': {
            'no': 'CustomerEquipment',
            'name': 'อุปกรณ์ชิ้นนี้เป็นของลูกค้า',
            'status_value': '15'
        }
    };

    // =========================================================================================
    header: string[] = [
        "appUseMode",
        "relocateState",
        "CPE_TYPE_MAP",
        "OLD_STATUS_DESC (CPE_status)",
        "SN_PATTERN",
        "REGISTER_DATE",
        "PENALTY_PRODUCT_CODE",
        "PENALTY",
        "STATUS_DESC (Return status to)",
        "APIs",
    ];
    dataList: any[] = [];

    addData(appUseMode: any, relocateState: any) {
        const data = this.deviceListUpdate[this.countUpdate]
        this.dataList.push({
            ...data,
            appUseMode: appUseMode,
            relocateState: relocateState,
            apis: []
        })
    }

    setAPI(apiName: any, confirmSusspend: boolean = false) {
        if (confirmSusspend) {
            this.dataList.push({ appUseMode: `"LAST DEVICE, All devices will be called to API:confirmSusspend"`, apis: ["confirmSusspend"] })
        } else {
            this.dataList[this.countUpdate].apis.push(apiName);
        }
    }

    async logDeviceInfo() {
        const headerText = this.header.join(",");
        const dataMap = this.dataList
            .map(item => {
                const data = [
                    item.appUseMode,
                    item.relocateState,
                    item.CPE_TYPE_MAP,
                    item.OLD_STATUS_DESC,
                    item.SN_PATTERN,
                    item.REGISTER_DATE,
                    item.PENALTY_PRODUCT_CODE,
                    item.PENALTY,
                    item.STATUS_DESC,
                    `"${item.apis.join(",")}"`
                ];
                return data.join(",");
            });

        const bodyText = dataMap.join("\n")

        const infoText = `${headerText}\n${bodyText}`

        // console.log("[logDeviceInfo] \n", infoText);
        await this.createFile(infoText);
    }

    async createFile(str: string) {
        const dirName = "results";
        const pathFile = `${dirName}/${this.currentFileName}.csv`
        const name = this.currentFileName;

        if (!fs.existsSync(dirName)) {
            fs.mkdir(dirName, (err) => {
                if (err) {
                    return console.error(`[${name}] mkdir ${err}`);
                }
                console.log(`[mkdir created] [${name}]`);
            })
        }
        fs.writeFile(pathFile, str, (err) => {
            if (err) {
                return console.error(`[${name}] ${err}`);
            }
            console.log(`[write success] [${name}]`);
        });
    }
}

// Devices example
// [
//     {
//         // =====================================================
//         "SERIAL_NO": "20222225000200",
//         "REGISTER_DATE": "2023-02-08 12:49:14",
//         "SN_PATTERN": "R",
//         "PENALTY_PRODUCT_CODE": "P17099884",
//         "PENALTY": "2500.0",
//         "STATUS_DESC": "In Service",
//         "CPE_TYPE_MAP": "Wifi router",
//         "newlocationFlag": "Y",
//         "RESULT": false,
//         "REASON": "BelowFiveYears",
//         // =====================================================
//         "COMPANY_CODE": "1200",
//         "CONDATE_FLG": false,
//         "CPE_AGING": "3M",
//         "CPE_BRAND_NAME": "HUAWEI",
//         "CPE_GROUP_TYPE": "WR",
//         "CPE_MODEL_ID": "HG8145X6",
//         "CPE_MODEL_NAME": "ONU HUAWEI - HG8145X6",
//         "CPE_TYPE": "CPE-Wifi router",
//         "FIBRENET_ID": "8850112953",
//         "MAP_REASON": "15",
//         "MATERIAL_CODE": "11033233",
//         "MODE": "update",
//         "OPER_DATE": "2023-02-27 15:19:32",
//         "PENALTY_DISPLAY": "2500.0",
//         "PLANT": "1204",
//         "REASON_NAME": "สงวนรักษาลูกค้า (ใช้งานมาน้อยกว่า <5 ปี)",
//         "STATUS": "4",
//         "STORAGE_LOCATION": "2090",
//         "SUB_DEVICES": [
//             {
//                 "AMOUNT": 0,
//                 "CPE_MODEL_NAME_EN": "Charger",
//                 "CPE_MODEL_NAME_TH": "สายชาร์จไฟ",
//                 "ID": "20222225000200_0",
//                 "SELECT": false,
//                 "TAG": "CHARGER"
//             },
//             {
//                 "AMOUNT": 0,
//                 "CPE_MODEL_NAME_EN": "LAN Cable",
//                 "CPE_MODEL_NAME_TH": "สายแลน",
//                 "ID": "20222225000200_1",
//                 "SELECT": false,
//                 "TAG": "LAN_CABLE"
//             },
//             {
//                 "AMOUNT": 0,
//                 "CPE_MODEL_NAME_EN": "Telephone Line",
//                 "CPE_MODEL_NAME_TH": "สายโทรศัพท์",
//                 "ID": "20222225000200_2",
//                 "SELECT": false,
//                 "TAG": "TELEPHONE_LINE"
//             }
//         ],
//         "YEAR": 0,
//         "isUpdated": false,
//         "needReason": true,
//         "oldModel": "Y",
//         "scaned": true,
//         "selectedReason": false
//     }
// ];

// 

const test = new TestFn();
test.exportCsvAll();