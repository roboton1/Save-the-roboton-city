/*:
 * @plugindesc Stores a savefile in local storage or extracts it to a file. Can be used to move savefiles.
 * @author Iavra
 *
 * @help
 * To export a savefile from local web storage to a file, call the following function:
 * IAVRA.SAVEMANAGER.exportWebStorage(savefileId);
 *
 * To import a savefile from a file to local web storage, call the following function (make sure, that the file actually
 * exists in your "save" folder):
 * IAVRA.SAVEMANAGER.importWebStorage(savefileId);
 *
 * When importing a savefile, the global save will automatically be imported, if possible.
 */
var IAVRA = IAVRA || {};

(function($) {
    "use strict";
    
    var _download = function(filename, data) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    
    var _upload = function(filename, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', filename);
        request.onload = function() { callback(request.responseText); };
        request.onerror = function() { throw new Error('The file named ' + filename + ' does not exist.'); };
        request.send();
    };
    
    $.SAVEMANAGER = {
    
        exportWebStorage: function(savefileId) {
            var data = StorageManager.loadFromWebStorage(savefileId);
            if(!data) { throw new Error('The savefile with id ' + savefileId + ' could not be found in web storage.'); }
            _download(StorageManager.localFilePath(savefileId).replace(/^.*[\\\/]/, ''), LZString.compressToBase64(data));
        }, 
        
        importWebStorage: function(savefileId) {
            _upload(StorageManager.localFilePath(savefileId), function(data) {
                StorageManager.saveToWebStorage(savefileId, LZString.decompressFromBase64(data));
                if(parseInt(savefileId) > 0) {
                    _upload(StorageManager.localFilePath(0), function(data) { 
                        var globalInfo = JsonEx.parse(StorageManager.loadFromWebStorage(0)) || [];
                        var savefileInfo = ((JsonEx.parse(LZString.decompressFromBase64(data)) || [])[savefileId]) || DataManager.makeSavefileInfo();
                        globalInfo[savefileId] = savefileInfo;
                        StorageManager.saveToWebStorage(0, JsonEx.stringify(globalInfo));
                    });
                }
            });
        }
        
    };
    
})(IAVRA);