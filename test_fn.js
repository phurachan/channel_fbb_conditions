"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFn = void 0;
var TestFn = /** @class */ (function () {
    function TestFn() {
        this.gAppUseMode = "return";
        this.isSuccess = false;
        this.countUpdate = 0;
        this.deviceListUpdate = [
            {
                "SERIAL_NO": "20222225000200",
                "REGISTER_DATE": "2023-02-08 12:49:14",
                "SN_PATTERN": "R",
                "PENALTY_PRODUCT_CODE": "P17099884",
                "PENALTY": "2500.0",
                "STATUS_DESC": "In Service",
                "CPE_TYPE_MAP": "Wifi router",
                "newlocationFlag": "Y",
                "RESULT": false,
                "REASON": "BelowFiveYears"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "In service",
                "SN_PATTERN": "B",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "6/1/2019",
                "OLD_STATUS_DESC": "Return/Inactive Not paid"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "In service",
                "SN_PATTERN": "B",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "8/1/2019",
                "OLD_STATUS_DESC": "Return/Inactive Not paid"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "In service",
                "SN_PATTERN": "B",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "6/1/2019",
                "OLD_STATUS_DESC": "Inactive"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "In service",
                "SN_PATTERN": "B",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "8/1/2019",
                "OLD_STATUS_DESC": "Inactive"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "In service",
                "SN_PATTERN": "R",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "8/1/2019",
                "OLD_STATUS_DESC": "Return/Inactive Not paid"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "In service",
                "SN_PATTERN": "R",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "8/1/2019",
                "OLD_STATUS_DESC": "Inactive"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "Inactive",
                "SN_PATTERN": "R",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "8/1/2019",
                "OLD_STATUS_DESC": "Return/Inactive Not paid"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "Inactive",
                "SN_PATTERN": "B",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "6/1/2019",
                "OLD_STATUS_DESC": "Return"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "Inactive",
                "SN_PATTERN": "B",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "8/1/2019",
                "OLD_STATUS_DESC": "Return"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "In service",
                "SN_PATTERN": "S",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "8/1/2019",
                "OLD_STATUS_DESC": "Return"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "In service",
                "SN_PATTERN": "S",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "6/1/2019",
                "OLD_STATUS_DESC": "Return"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "Inactive",
                "SN_PATTERN": "S",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "6/1/2019",
                "OLD_STATUS_DESC": "Return"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "Inactive",
                "SN_PATTERN": "S",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "8/1/2019",
                "OLD_STATUS_DESC": "Return"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "Return",
                "SN_PATTERN": "B",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "6/1/2019",
                "OLD_STATUS_DESC": "Return"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "Return",
                "SN_PATTERN": "B",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "8/1/2019",
                "OLD_STATUS_DESC": "Return"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "Return",
                "SN_PATTERN": "R",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "6/1/2019",
                "OLD_STATUS_DESC": "Return"
            },
            {
                "SERIAL_NO": "20222225000200",
                "CPE_TYPE_MAP": "WIFI Router",
                "STATUS_DESC": "Return",
                "SN_PATTERN": "R",
                "newlocationFlag": "Y",
                "REGISTER_DATE": "8/1/2019",
                "OLD_STATUS_DESC": "Return"
            }
        ];
        this.statusMapping = {
            '0': 'Available',
            '4': 'In Service',
            '10': 'Out of Service',
            '11': 'Return',
            '12': 'Inactive',
            '13': 'Inactive Paid',
            '14': 'Expect Lost',
            '15': 'Inactive not Paid',
            '99': 'Delete'
        };
        this.reasonMappingList = {
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
    }
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
    TestFn.prototype.stepWaveAndUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var successFull, nextItem, self, appUseMode, i, _a, found_deleteOTC, delete_OTC_CANCEL, isUpdateCpe, checkPromo, checkService, profileStatus, relocateState, statusDesc, statusOldDesc, condFlag, rType, pTern, suspend;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        successFull = true;
                        nextItem = true;
                        self = this;
                        appUseMode = this.gAppUseMode;
                        if (this.deviceListUpdate.length <= 0)
                            return [2 /*return*/];
                        if (this.countUpdate === this.deviceListUpdate.length - 1) {
                            nextItem = false;
                        }
                        i = this.countUpdate;
                        // status เดิม = inactive
                        // date > 1/7/2019
                        // มี PENALTY_PRODUCT_CODE
                        // มีค่า PENALTY > 0 ,
                        // update เป็น return , inactive not paid
                        // ==========================================================
                        _a = this;
                        return [4 /*yield*/, this.setStatusReturn(this.deviceListUpdate)];
                    case 1:
                        // status เดิม = inactive
                        // date > 1/7/2019
                        // มี PENALTY_PRODUCT_CODE
                        // มีค่า PENALTY > 0 ,
                        // update เป็น return , inactive not paid
                        // ==========================================================
                        _a.deviceListUpdate = _b.sent();
                        // ==========================================================
                        console.log("--------------------- [appUseMode]: ", appUseMode, " ---------------------");
                        found_deleteOTC = {};
                        if (appUseMode == "return") {
                            if (this.deviceListUpdate[i].OLD_STATUS_DESC === 'Inactive' &&
                                this.checkRegisterDate(this.deviceListUpdate[i].REGISTER_DATE) &&
                                this.deviceListUpdate[i].SN_PATTERN === "B" || "R" &&
                                this.deviceListUpdate[i].PENALTY_PRODUCT_CODE &&
                                +this.deviceListUpdate[i].PENALTY > 0) {
                                if (this.deviceListUpdate[i].STATUS_DESC === 'Return'
                                    || this.deviceListUpdate[i].STATUS_DESC === 'Inactive not Paid'
                                    || this.deviceListUpdate[i].STATUS_DESC === 'Inactive') {
                                    found_deleteOTC = this.deviceListUpdate[i];
                                }
                            }
                        }
                        delete_OTC_CANCEL = {};
                        if (appUseMode == "cancel") {
                            if (this.deviceListUpdate[i].OLD_STATUS_DESC === "Inactive" &&
                                this.deviceListUpdate[i].SN_PATTERN === "B" &&
                                this.deviceListUpdate[i].PENALTY_PRODUCT_CODE &&
                                this.checkRegisterDate(this.deviceListUpdate[i].REGISTER_DATE) &&
                                this.deviceListUpdate[i].PENALTY >= 0) {
                                if (this.deviceListUpdate[i].STATUS_DESC === "Return" ||
                                    this.deviceListUpdate[i].STATUS_DESC === "Inactive not Paid") {
                                    delete_OTC_CANCEL = this.deviceListUpdate[i];
                                }
                            }
                            else if (this.deviceListUpdate[i].OLD_STATUS_DESC === "In Service" &&
                                this.deviceListUpdate[i].SN_PATTERN === "B" &&
                                this.deviceListUpdate[i].PENALTY_PRODUCT_CODE &&
                                this.checkRegisterDate(this.deviceListUpdate[i].REGISTER_DATE) &&
                                this.deviceListUpdate[i].PENALTY >= 0) {
                                if (this.deviceListUpdate[i].STATUS_DESC === "Inactive not Paid") {
                                    delete_OTC_CANCEL = this.deviceListUpdate[i];
                                }
                            }
                        }
                        this.isSuccess = true;
                        isUpdateCpe = false;
                        return [4 /*yield*/, this.getCustomerProfileObject()];
                    case 2:
                        profileStatus = _b.sent();
                        relocateState = profileStatus.relocateState;
                        // ==========================================================
                        console.log("--------------------- [relocateState]: ", relocateState, " ---------------------");
                        this.logDeviceInfo();
                        if (!(appUseMode === "return" || appUseMode == "wttx")) return [3 /*break*/, 92];
                        if (!(relocateState === "Relocation")) return [3 /*break*/, 44];
                        statusDesc = self.deviceListUpdate[i].STATUS_DESC.toLowerCase();
                        statusOldDesc = self.deviceListUpdate[i].OLD_STATUS_DESC.toLowerCase();
                        condFlag = self.deviceListUpdate[i].newlocationFlag;
                        rType = self.deviceListUpdate[i].CPE_TYPE_MAP.toLowerCase();
                        pTern = self.deviceListUpdate[i].SN_PATTERN;
                        if (!(rType === "ais playbox" && statusOldDesc === "in service")) return [3 /*break*/, 13];
                        if (!(condFlag === "Y" &&
                            (statusDesc === "return" ||
                                statusDesc === "inactive" ||
                                statusDesc === "inactive not paid"))) return [3 /*break*/, 9];
                        return [4 /*yield*/, self.newOnChangeServiceCallApi(self.deviceListUpdate[i])];
                    case 3:
                        checkService = _b.sent();
                        if (!checkService) return [3 /*break*/, 7];
                        return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 4:
                        isUpdateCpe = _b.sent();
                        if (!isUpdateCpe) return [3 /*break*/, 6];
                        return [4 /*yield*/, self.saveTransection("02", self.deviceListUpdate[i].SERIAL_NO)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        nextItem = false;
                        successFull = false;
                        _b.label = 8;
                    case 8: return [3 /*break*/, 12];
                    case 9:
                        if (!(condFlag === "N" &&
                            (statusDesc === "return" ||
                                statusDesc === "inactive" ||
                                statusDesc === "inactive not paid"))) return [3 /*break*/, 12];
                        return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 10:
                        isUpdateCpe = _b.sent();
                        if (!isUpdateCpe) return [3 /*break*/, 12];
                        return [4 /*yield*/, self.saveTransection("02", self.deviceListUpdate[i].SERIAL_NO)];
                    case 11:
                        _b.sent();
                        _b.label = 12;
                    case 12: return [3 /*break*/, 43];
                    case 13:
                        if (!(rType === "wifi router")) return [3 /*break*/, 38];
                        if (!(self.deviceListUpdate[i].SN_PATTERN === "B")) return [3 /*break*/, 16];
                        return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 14:
                        // nothing
                        isUpdateCpe = _b.sent();
                        return [4 /*yield*/, self.saveTransection("00", self.deviceListUpdate[i].SERIAL_NO)];
                    case 15:
                        _b.sent();
                        return [3 /*break*/, 37];
                    case 16:
                        if (!(self.deviceListUpdate[i].SN_PATTERN === "R")) return [3 /*break*/, 32];
                        if (!(statusOldDesc === "in service" &&
                            (statusDesc === "return" ||
                                statusDesc === "inactive" ||
                                statusDesc === "inactive not paid"))) return [3 /*break*/, 26];
                        if (!(condFlag === "Y")) return [3 /*break*/, 22];
                        return [4 /*yield*/, self.newOnChangePromotion(self.deviceListUpdate[i])];
                    case 17:
                        checkPromo = _b.sent();
                        if (!checkPromo) return [3 /*break*/, 20];
                        return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 18:
                        isUpdateCpe = _b.sent();
                        return [4 /*yield*/, self.saveTransection("01", self.deviceListUpdate[i].SERIAL_NO)];
                    case 19:
                        _b.sent();
                        return [3 /*break*/, 21];
                    case 20:
                        nextItem = false;
                        successFull = false;
                        _b.label = 21;
                    case 21: return [3 /*break*/, 25];
                    case 22:
                        if (!(condFlag === "N")) return [3 /*break*/, 25];
                        return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 23:
                        isUpdateCpe = _b.sent();
                        if (!isUpdateCpe) return [3 /*break*/, 25];
                        return [4 /*yield*/, self.saveTransection("02", self.deviceListUpdate[i].SERIAL_NO)];
                    case 24:
                        _b.sent();
                        _b.label = 25;
                    case 25: return [3 /*break*/, 31];
                    case 26:
                        if (!(statusOldDesc === "inactive" &&
                            (statusDesc === "return" || statusDesc === "inactive not paid"))) return [3 /*break*/, 31];
                        if (!(condFlag === "Y" || condFlag === "N")) return [3 /*break*/, 31];
                        if (!(Object.keys(found_deleteOTC).length > 0)) return [3 /*break*/, 28];
                        return [4 /*yield*/, self.newOnChangeDeleteOTC(found_deleteOTC)];
                    case 27:
                        _b.sent();
                        _b.label = 28;
                    case 28: return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 29:
                        _b.sent();
                        return [4 /*yield*/, self.saveTransection("01", self.deviceListUpdate[i].SERIAL_NO)];
                    case 30:
                        _b.sent();
                        _b.label = 31;
                    case 31: return [3 /*break*/, 37];
                    case 32:
                        if (!(Object.keys(found_deleteOTC).length > 0)) return [3 /*break*/, 34];
                        return [4 /*yield*/, self.newOnChangeDeleteOTC(found_deleteOTC)];
                    case 33:
                        _b.sent();
                        _b.label = 34;
                    case 34: return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 35:
                        isUpdateCpe = _b.sent();
                        return [4 /*yield*/, self.saveTransection("00", self.deviceListUpdate[i].SERIAL_NO)];
                    case 36:
                        _b.sent();
                        _b.label = 37;
                    case 37: return [3 /*break*/, 43];
                    case 38:
                        if (!(Object.keys(found_deleteOTC).length > 0)) return [3 /*break*/, 40];
                        return [4 /*yield*/, self.newOnChangeDeleteOTC(found_deleteOTC)];
                    case 39:
                        _b.sent();
                        _b.label = 40;
                    case 40: return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 41:
                        isUpdateCpe = _b.sent();
                        return [4 /*yield*/, self.saveTransection("00", self.deviceListUpdate[i].SERIAL_NO)];
                    case 42:
                        _b.sent();
                        _b.label = 43;
                    case 43: return [3 /*break*/, 91];
                    case 44:
                        if (!(self.deviceListUpdate[i].CPE_TYPE_MAP.toLowerCase() === 'wifi router')) return [3 /*break*/, 63];
                        if (!(self.deviceListUpdate[i].OLD_STATUS_DESC.toLowerCase() === 'in service')) return [3 /*break*/, 47];
                        return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 45:
                        //nothing
                        isUpdateCpe = _b.sent();
                        return [4 /*yield*/, self.saveTransection('03', self.deviceListUpdate[i].SERIAL_NO)];
                    case 46:
                        _b.sent();
                        return [3 /*break*/, 62];
                    case 47:
                        if (!(self.deviceListUpdate[i].SN_PATTERN === 'R')) return [3 /*break*/, 56];
                        if (!(self.deviceListUpdate[i].OLD_STATUS_DESC === 'Inactive' && self.deviceListUpdate[i].STATUS_DESC === 'Inactive')) return [3 /*break*/, 48];
                        return [3 /*break*/, 50];
                    case 48:
                        if (!(Object.keys(found_deleteOTC).length > 0)) return [3 /*break*/, 50];
                        return [4 /*yield*/, self.newOnChangeDeleteOTC(found_deleteOTC)];
                    case 49:
                        _b.sent();
                        _b.label = 50;
                    case 50: return [4 /*yield*/, self.newOnChangePromotion(self.deviceListUpdate[i])];
                    case 51:
                        checkPromo = _b.sent();
                        if (!checkPromo) return [3 /*break*/, 54];
                        return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 52:
                        isUpdateCpe = _b.sent();
                        return [4 /*yield*/, self.saveTransection('01', self.deviceListUpdate[i].SERIAL_NO)];
                    case 53:
                        _b.sent();
                        return [3 /*break*/, 55];
                    case 54:
                        nextItem = false;
                        successFull = false;
                        _b.label = 55;
                    case 55: return [3 /*break*/, 62];
                    case 56:
                        if (!(self.deviceListUpdate[i].OLD_STATUS_DESC === 'Inactive' && self.deviceListUpdate[i].STATUS_DESC === 'Inactive')) return [3 /*break*/, 57];
                        return [3 /*break*/, 59];
                    case 57:
                        if (!(Object.keys(found_deleteOTC).length > 0)) return [3 /*break*/, 59];
                        return [4 /*yield*/, self.newOnChangeDeleteOTC(found_deleteOTC)];
                    case 58:
                        _b.sent();
                        _b.label = 59;
                    case 59: return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 60:
                        isUpdateCpe = _b.sent();
                        return [4 /*yield*/, self.saveTransection('03', self.deviceListUpdate[i].SERIAL_NO)];
                    case 61:
                        _b.sent();
                        _b.label = 62;
                    case 62: return [3 /*break*/, 91];
                    case 63:
                        if (!(self.deviceListUpdate[i].CPE_TYPE_MAP.toLowerCase() ===
                            "ais playbox" &&
                            self.deviceListUpdate[i].SN_PATTERN === "B")) return [3 /*break*/, 68];
                        if (!(profileStatus.status === "Disconnect - Terminate" ||
                            profileStatus.status === "Disconnect - Customer Request" ||
                            profileStatus.orderStatus === "Disconnect - Terminate" ||
                            profileStatus.orderStatus === "Disconnect - Customer Request")) return [3 /*break*/, 67];
                        if (!((self.deviceListUpdate[i].OLD_STATUS_DESC === "Inactive" &&
                            self.deviceListUpdate[i].STATUS_DESC === "Return") ||
                            self.deviceListUpdate[i].STATUS_DESC === "Inactive not Paid")) return [3 /*break*/, 67];
                        if (!(Object.keys(found_deleteOTC).length > 0)) return [3 /*break*/, 65];
                        return [4 /*yield*/, self.newOnChangeDeleteOTC(found_deleteOTC)];
                    case 64:
                        _b.sent();
                        _b.label = 65;
                    case 65: return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 66:
                        isUpdateCpe = _b.sent();
                        _b.label = 67;
                    case 67: return [3 /*break*/, 91];
                    case 68:
                        if (!(self.deviceListUpdate[i].CPE_TYPE_MAP.toLowerCase() === 'ais playbox')) return [3 /*break*/, 85];
                        if (!((profileStatus.status !== 'Disconnect - Terminate' && profileStatus.status !== 'Disconnect - Customer Request') ||
                            (profileStatus.orderStatus !== 'Disconnect - Terminate' && profileStatus.orderStatus !== 'Disconnect - Customer Request'))) return [3 /*break*/, 78];
                        if (!(self.deviceListUpdate[i].OLD_STATUS_DESC === 'Inactive' && self.deviceListUpdate[i].STATUS_DESC === 'Inactive')) return [3 /*break*/, 69];
                        return [3 /*break*/, 71];
                    case 69:
                        if (!(Object.keys(found_deleteOTC).length > 0)) return [3 /*break*/, 71];
                        return [4 /*yield*/, self.newOnChangeDeleteOTC(found_deleteOTC)];
                    case 70:
                        _b.sent();
                        _b.label = 71;
                    case 71: return [4 /*yield*/, self.newOnChangeServiceCallApi(self.deviceListUpdate[i])];
                    case 72:
                        checkService = _b.sent();
                        if (!checkService) return [3 /*break*/, 76];
                        return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 73:
                        isUpdateCpe = _b.sent();
                        if (!isUpdateCpe) return [3 /*break*/, 75];
                        // await self.printService.deleteDevicesDetails(self.deviceListUpdate[i])
                        //        .then((res)=> {return true; }).catch((e) => { return false });
                        return [4 /*yield*/, self.saveTransection('02', self.deviceListUpdate[i].SERIAL_NO)];
                    case 74:
                        // await self.printService.deleteDevicesDetails(self.deviceListUpdate[i])
                        //        .then((res)=> {return true; }).catch((e) => { return false });
                        _b.sent();
                        _b.label = 75;
                    case 75: return [3 /*break*/, 77];
                    case 76:
                        nextItem = false;
                        successFull = false;
                        _b.label = 77;
                    case 77: return [3 /*break*/, 84];
                    case 78:
                        if (!(self.deviceListUpdate[i].OLD_STATUS_DESC === 'Inactive' && self.deviceListUpdate[i].STATUS_DESC === 'Inactive')) return [3 /*break*/, 79];
                        return [3 /*break*/, 81];
                    case 79:
                        if (!(Object.keys(found_deleteOTC).length > 0)) return [3 /*break*/, 81];
                        return [4 /*yield*/, self.newOnChangeDeleteOTC(found_deleteOTC)];
                    case 80:
                        _b.sent();
                        _b.label = 81;
                    case 81: return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 82:
                        isUpdateCpe = _b.sent();
                        return [4 /*yield*/, self.saveTransection('023', self.deviceListUpdate[i].SERIAL_NO)];
                    case 83:
                        _b.sent();
                        _b.label = 84;
                    case 84: return [3 /*break*/, 91];
                    case 85:
                        if (!(self.deviceListUpdate[i].OLD_STATUS_DESC === 'Inactive' && self.deviceListUpdate[i].STATUS_DESC === 'Inactive')) return [3 /*break*/, 86];
                        return [3 /*break*/, 88];
                    case 86:
                        if (!(Object.keys(found_deleteOTC).length > 0)) return [3 /*break*/, 88];
                        return [4 /*yield*/, self.newOnChangeDeleteOTC(found_deleteOTC)];
                    case 87:
                        _b.sent();
                        _b.label = 88;
                    case 88: return [4 /*yield*/, self.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 89:
                        isUpdateCpe = _b.sent();
                        return [4 /*yield*/, self.saveTransection('03', self.deviceListUpdate[i].SERIAL_NO)];
                    case 90:
                        _b.sent();
                        _b.label = 91;
                    case 91: return [3 /*break*/, 96];
                    case 92:
                        if (!(appUseMode === "cancel")) return [3 /*break*/, 96];
                        if (!(Object.keys(delete_OTC_CANCEL).length > 0)) return [3 /*break*/, 94];
                        return [4 /*yield*/, self.newOnChangeDeleteOTC(delete_OTC_CANCEL)];
                    case 93:
                        _b.sent();
                        _b.label = 94;
                    case 94: return [4 /*yield*/, this.newStepUpdateCpe(self.deviceListUpdate[i].SERIAL_NO)];
                    case 95:
                        isUpdateCpe = _b.sent();
                        _b.label = 96;
                    case 96:
                        if (isUpdateCpe) {
                            // this.myChannelFbbService.setCustomerDeviceObjectSuccessUpdate(
                            //     self.deviceListUpdate[i].SERIAL_NO
                            // );
                        }
                        this.countUpdate++;
                        if (!nextItem) return [3 /*break*/, 97];
                        this.stepWaveAndUpdate();
                        return [3 /*break*/, 101];
                    case 97:
                        if (!(appUseMode === "cancel")) return [3 /*break*/, 99];
                        return [4 /*yield*/, this.confirmSusspend(0)];
                    case 98:
                        suspend = _b.sent();
                        if (!suspend) {
                            self.deviceListUpdate.forEach(function (d) {
                                // this.myChannelFbbService.setCustomerDeviceObjectFailUpdate(
                                //     d.SERIAL_NO
                                // );
                            });
                        }
                        return [3 /*break*/, 100];
                    case 99:
                        if (successFull) {
                            // self.callPopup("อัพเดทสถานะ คืนอุปกรณ์ และ AIS PLAYBOX สำเร็จ");
                        }
                        _b.label = 100;
                    case 100:
                        // self.setRouteLink(
                        //     "../" + environment.appPath + "/" + appUseMode,
                        //     "href",
                        //     self.route
                        // );
                        localStorage.removeItem("dummySerial");
                        // this.pageLoadingService.closeLoading();
                        this.countUpdate = 0;
                        _b.label = 101;
                    case 101:
                        console.log("--------------------- END ---------------------");
                        return [2 /*return*/];
                }
            });
        });
    };
    // =========================================================================================
    // [Return][1]
    // [Cancel][1]
    TestFn.prototype.newStepUpdateCpe = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("[API][UpdateCpe] ", value);
                return [2 /*return*/, true];
            });
        });
    };
    // [Return][2]
    // [Cancel][2]
    TestFn.prototype.newOnChangeDeleteOTC = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("[API][newOnChangeDeleteOTC] ", value);
                return [2 /*return*/];
            });
        });
    };
    // [Return][3]
    TestFn.prototype.newOnChangeServiceCallApi = function (value) {
        console.log("[API][newOnChangeServiceCallApi] ", value);
    };
    // =========================================================================================
    TestFn.prototype.setStatusReturn = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var deviceList;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, data.filter(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(data.RESULT === true && data.REASON === "Normal")) return [3 /*break*/, 2];
                                        // set status return only case insert device
                                        data['OLD_STATUS'] = data.STATUS;
                                        data['OLD_STATUS_DESC'] = this.statusMapping[data.STATUS];
                                        data.STATUS = '11';
                                        data.STATUS_DESC = 'Return';
                                        return [4 /*yield*/, data];
                                    case 1: return [2 /*return*/, _a.sent()];
                                    case 2:
                                        data['OLD_STATUS'] = data.STATUS;
                                        data['OLD_STATUS_DESC'] = this.statusMapping[data.STATUS];
                                        data.STATUS = this.reasonMappingList[data.REASON].status_value;
                                        data.STATUS_DESC = this.statusMapping[data.STATUS];
                                        return [4 /*yield*/, data];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1:
                        deviceList = _a.sent();
                        return [2 /*return*/, deviceList];
                }
            });
        });
    };
    TestFn.prototype.checkRegisterDate = function (date) {
        var registerDate = new Date(date);
        var fixDate = new Date("2019-07-01");
        return registerDate > fixDate;
    };
    TestFn.prototype.saveTransection = function (state, serialNo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("[API][saveTransection] ", serialNo, " :: ", state);
                return [2 /*return*/];
            });
        });
    };
    TestFn.prototype.newOnChangePromotion = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("[API][newOnChangePromotion] ", data);
                return [2 /*return*/];
            });
        });
    };
    TestFn.prototype.confirmSusspend = function (value) {
        console.log("[API][suspendReconnect] ", value);
        return {};
    };
    TestFn.prototype.logDeviceInfo = function () {
        var data = this.deviceListUpdate[this.countUpdate];
        var infoText = "\n    SERIAL_NO: ".concat(data.SERIAL_NO, ",\n    STATUS_DESC: ").concat(data.STATUS_DESC, ",\n    OLD_STATUS_DESC: ").concat(data.OLD_STATUS_DESC, ",\n    SN_PATTERN: ").concat(data.SN_PATTERN, ",\n    REGISTER_DATE: ").concat(data.REGISTER_DATE, ",\n    PENALTY_PRODUCT_CODE: ").concat(data.PENALTY_PRODUCT_CODE, ",\n    PENALTY: ").concat(data.PENALTY, ",\n    RESULT: ").concat(data.RESULT, ",\n    REASON: ").concat(data.REASON, ",");
        console.log("[logDeviceInfo] ", infoText);
    };
    TestFn.prototype.getCustomerProfileObject = function () {
        return {
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
            "relocateState": "-",
            "segment": "Classic",
            "serviceLevel": "L",
            "serviceType": "FTTH",
            "serviceYear": "0 Year 3 Months",
            "setPlaboxbundling": 0,
            "status": "Active",
            "statusDate": "07/02/2023 16:17:05",
            "statusMap": "Active",
            "statusReason": "956-มีความต้องการใช้ Promotion Package",
            "technology": "FTTH"
        };
    };
    return TestFn;
}());
exports.TestFn = TestFn;
var test = new TestFn();
test.stepWaveAndUpdate();
