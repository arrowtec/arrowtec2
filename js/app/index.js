$(function () {

    

    $('.dropdown-button').dropdown({
        constrainWidth: false
    });

    var app = $.sammy('#main', function () {

        var form_fields = null;
        this.get('#/', function () {
            this.partial('views/home.html');
        });

        this.get('#/form', function () {
            this.partial('views/form.html');
        });
		
	 
        this.get('#/mail', function () {
            this.partial('views/mail.html');
        });

        this.get('#/purchase', function () {
            this.partial('views/purchase.html');
        });

        this.get('#/confirm', function () {
            this.partial('views/confirm.html');
        });

        this.get('#/search', function () {
            this.partial('views/search.html');
        });

        this.get('#/info', function () {
            this.partial('views/info.html');
        });

        this.get('#/validity', function () {
            this.partial('views/validity.html');
        });

          this.get('#/offer', function () {
            this.partial('views/offer.html');
        });
        
    });
 


    app.run('#/');
});