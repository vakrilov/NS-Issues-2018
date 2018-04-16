"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var application_1 = require("tns-core-modules/application");
var utils_1 = require("tns-core-modules/utils/utils");
if (application_1.android) {
    console.log("androidApp");
    var context_1 = utils_1.ad.getApplicationContext();
    application_1.android.on(application_1.AndroidApplication.activityCreatedEvent, function (args) {
        var builder = new android.os.StrictMode.VmPolicy.Builder(); //red squiggly line appears under android here
        android.os.StrictMode.setVmPolicy(builder.build()); //red squiggly line appears under android here
        // Needed for corner cases with HTTP request using TSL on Android API19
        com.google.android.gms.security.ProviderInstaller.installIfNeededAsync(context_1, new com.google.android.gms.security.ProviderInstaller.ProviderInstallListener({
            onProviderInstalled: function () {
                console.log("Provider Installed!");
            },
            onProviderInstallFailed: function (errorCode, intent) {
                console.log("Error: " + errorCode);
            }
        }));
    });
}
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwR0FBMEc7QUFDMUcsMERBQTRFO0FBQzVFLDJDQUF5QztBQUV6Qyw0REFBeUg7QUFDekgsc0RBQWtEO0FBS2xELEVBQUUsQ0FBQyxDQUFDLHFCQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUV6QixJQUFNLFNBQU8sR0FBRyxVQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUUzQyxxQkFBVSxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLElBQW9DO1FBQ3hGLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsOENBQThDO1FBQzFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLDhDQUE4QztRQUVsRyx1RUFBdUU7UUFDdkUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FDbEUsU0FBTyxFQUNQLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQztZQUMxRSxtQkFBbUIsRUFBRTtnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFDRCx1QkFBdUIsRUFBRSxVQUFDLFNBQVMsRUFBRSxNQUFNO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQztZQUN2QyxDQUFDO1NBQ0osQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRCxzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgYW5kcm9pZCBhcyBhbmRyb2lkQXBwLCBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJ1bmRsZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBhZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XG5cbmRlY2xhcmUgbGV0IGNvbTogYW55O1xuZGVjbGFyZSBsZXQgYW5kcm9pZDogYW55O1xuXG5pZiAoYW5kcm9pZEFwcCkge1xuICAgIGNvbnNvbGUubG9nKFwiYW5kcm9pZEFwcFwiKVxuXG4gICAgY29uc3QgY29udGV4dCA9IGFkLmdldEFwcGxpY2F0aW9uQ29udGV4dCgpO1xuXG4gICAgYW5kcm9pZEFwcC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlDcmVhdGVkRXZlbnQsIChhcmdzOiBBbmRyb2lkQWN0aXZpdHlCdW5kbGVFdmVudERhdGEpID0+IHtcbiAgICAgICAgbGV0IGJ1aWxkZXIgPSBuZXcgYW5kcm9pZC5vcy5TdHJpY3RNb2RlLlZtUG9saWN5LkJ1aWxkZXIoKTsgLy9yZWQgc3F1aWdnbHkgbGluZSBhcHBlYXJzIHVuZGVyIGFuZHJvaWQgaGVyZVxuICAgICAgICBhbmRyb2lkLm9zLlN0cmljdE1vZGUuc2V0Vm1Qb2xpY3koYnVpbGRlci5idWlsZCgpKTsgLy9yZWQgc3F1aWdnbHkgbGluZSBhcHBlYXJzIHVuZGVyIGFuZHJvaWQgaGVyZVxuXG4gICAgICAgIC8vIE5lZWRlZCBmb3IgY29ybmVyIGNhc2VzIHdpdGggSFRUUCByZXF1ZXN0IHVzaW5nIFRTTCBvbiBBbmRyb2lkIEFQSTE5XG4gICAgICAgIGNvbS5nb29nbGUuYW5kcm9pZC5nbXMuc2VjdXJpdHkuUHJvdmlkZXJJbnN0YWxsZXIuaW5zdGFsbElmTmVlZGVkQXN5bmMoXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgbmV3IGNvbS5nb29nbGUuYW5kcm9pZC5nbXMuc2VjdXJpdHkuUHJvdmlkZXJJbnN0YWxsZXIuUHJvdmlkZXJJbnN0YWxsTGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgIG9uUHJvdmlkZXJJbnN0YWxsZWQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm92aWRlciBJbnN0YWxsZWQhXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Qcm92aWRlckluc3RhbGxGYWlsZWQ6IChlcnJvckNvZGUsIGludGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yQ29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgIH0pO1xufVxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXX0=