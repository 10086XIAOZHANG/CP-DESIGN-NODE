"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var Moment = require("moment");
var TagController_1 = require("../../controllers/TagController");
var common_1 = require("./common");
// tag
var tagObjectType = new graphql_1.GraphQLObjectType({
    name: 'tag',
    fields: {
        id: {
            type: graphql_1.GraphQLString
        },
        name: {
            type: graphql_1.GraphQLString
        },
        remark: {
            type: graphql_1.GraphQLString
        },
        createdAt: {
            type: graphql_1.GraphQLString,
            resolve: function (obj, args, ctx, info) {
                var createdAt = Number(obj.createdAt) || Date.now();
                return Moment(createdAt).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        createdBy: {
            type: graphql_1.GraphQLString
        }
    }
});
// tag pages type
var TagPagesType = new graphql_1.GraphQLObjectType({
    name: 'tagPageType',
    fields: __assign({}, common_1.metaFields, { list: {
            type: new graphql_1.GraphQLList(tagObjectType)
        } })
});
var query = {
    tag: {
        type: tagObjectType,
        args: {
            id: {
                name: 'id',
                type: graphql_1.GraphQLString
            }
        },
        resolve: function (obj, args, ctx, info) { return __awaiter(_this, void 0, void 0, function () {
            var id, tag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = args.id;
                        return [4 /*yield*/, TagController_1.default.getById(id)];
                    case 1:
                        tag = _a.sent();
                        return [2 /*return*/, tag];
                }
            });
        }); }
    },
    tags: {
        type: TagPagesType,
        args: __assign({}, common_1.pageArgsFields, { name: {
                name: 'name',
                type: graphql_1.GraphQLString
            } }),
        resolve: function (obj, args, ctx, info) { return __awaiter(_this, void 0, void 0, function () {
            var pages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TagController_1.default.pages(args)];
                    case 1:
                        pages = _a.sent();
                        return [2 /*return*/, Object.assign(__assign({ list: pages[0], total: pages[1] }, args))];
                }
            });
        }); }
    }
};
var mutation = {
    tag: {
        type: tagObjectType,
        args: {
            name: {
                type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
            },
            remark: {
                type: graphql_1.GraphQLString
            }
        },
        resolve: function (obj, args, ctx, info) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TagController_1.default.insert(args, ctx)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); }
    },
    editTag: {
        type: tagObjectType,
        args: {
            id: {
                type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
            },
            name: {
                type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
            },
            remark: {
                type: graphql_1.GraphQLString
            }
        },
        resolve: function (obj, args, ctx, info) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TagController_1.default.update(args, ctx)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); }
    }
};
exports.default = {
    query: query,
    mutation: mutation
};
//# sourceMappingURL=Tag.js.map