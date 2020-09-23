const qiniu = require('qiniu')
module.exports = {
    async qiniuUpload(filePath, fileName){
        var accessKey = ''
        var secretKey = ''
        var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
        // 要上传的空间
        var bucket = 'lb-01'
        var options = {
            scope: bucket,
        // callbackBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
        // callbackBodyType: 'application/json'
        }
        var putPolicy = new qiniu.rs.PutPolicy(options)
        var uploadToken = putPolicy.uploadToken(mac)

        var config = new qiniu.conf.Config();
        // 空间对应的机房
        config.zone = qiniu.zone.Zone_z2;
        // var localFile = "/Users/jemy/Documents/qiniu.mp4";
        var localFile = filePath;
        var formUploader = new qiniu.form_up.FormUploader(config);
        var putExtra = new qiniu.form_up.PutExtra();
        // var key='test.mp4';
        var key = fileName;
        // 文件上传
        // return Promise.resolve('123')
        formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr, respBody, respInfo) {
            if (respErr) {
                throw respErr;
            }
            if (respInfo.statusCode == 200) {
                console.log(respBody);
            } else {
                console.log(respInfo.statusCode);
                console.log(respBody);
            }
        });
    },

    getQiNiuUploadToken(){
        var accessKey = '71gsP6S1pPrRl8ZK-TGiLjlmC_xlNoUGviqMKCgO'
        var secretKey = 'zjz-qopAdDxWXPCRs5Gr7iVUZ4MOHK_jhJLl9vs6'
        var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
        // 要上传的空间
        var bucket = 'lb-01'
        var options = {
            scope: bucket,
        }
        var putPolicy = new qiniu.rs.PutPolicy(options)
        var uploadToken = putPolicy.uploadToken(mac)
        return uploadToken
    }
}