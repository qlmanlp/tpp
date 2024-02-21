var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return this.nextHandler;
    };
    Handler.prototype.handle = function (request) {
        if (this.nextHandler != null) {
            this.nextHandler.handle(request);
        }
    };
    return Handler;
}());
var SpamHandle = /** @class */ (function (_super) {
    __extends(SpamHandle, _super);
    function SpamHandle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpamHandle.prototype.handle = function (request) {
        if (request === "spam") {
            console.log("Spam processed!");
        }
        else if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
        else {
            console.log("Request isn`t processed");
        }
    };
    return SpamHandle;
}(Handler));
;
var SupportHandle = /** @class */ (function (_super) {
    __extends(SupportHandle, _super);
    function SupportHandle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SupportHandle.prototype.handle = function (request) {
        if (request === "trouble") {
            console.log("Trouble processed!");
        }
        else if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
        else {
            console.log("Request isn`t processed");
        }
    };
    return SupportHandle;
}(Handler));
;
var EngineerHandle = /** @class */ (function (_super) {
    __extends(EngineerHandle, _super);
    function EngineerHandle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EngineerHandle.prototype.handle = function (request) {
        if (request === "breaking") {
            console.log("breaking processed!");
        }
        else if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
        else {
            console.log("Request isn`t processed");
        }
    };
    return EngineerHandle;
}(Handler));
;
var DirectorHandle = /** @class */ (function (_super) {
    __extends(DirectorHandle, _super);
    function DirectorHandle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectorHandle.prototype.handle = function (request) {
        if (request === "conflict") {
            console.log("conflict processed!");
        }
        else if (this.nextHandler) {
            this.nextHandler.handle(request);
        }
        else {
            console.log("Request isn`t processed");
        }
    };
    return DirectorHandle;
}(Handler));
;
var spamFilter = new SpamHandle();
var supportTeam = new SupportHandle();
var engineerTeam = new EngineerHandle();
var director = new DirectorHandle();
spamFilter
    .setNext(supportTeam)
    .setNext(engineerTeam)
    .setNext(director);
var request = ["spam", "spam", "spam", "conflict", "trouble", "spam", "breaking", "pizza"];
request.forEach(function (item) {
    spamFilter.handle(item);
});
