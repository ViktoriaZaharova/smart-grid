$(function() {

    var obj = {
        test:function() {
            console.log('obj.test');
        }
    }


    $(obj).on('someEvent', function(){
        console.log('obj.someEvent');
        this.test();
    });
    $(obj).trigger('someEvent');
    console.log(obj);


});
