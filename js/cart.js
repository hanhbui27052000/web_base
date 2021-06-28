$(document).ready(function () {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var html = cart.map(item => {
        return `
            <div class="product-cart row" style="border-top: 1px solid #E8E8E8;padding-bottom: 15px;">
				<div class="col-md-4" style="margin-top: 20px;margin-top: 20px;">
					<div class=" col-md-4">
						<img src="${item.image}" id="img_product" style="width: 90px;">
					</div>
					<div class="col-md-8">
						<h4 id="name_product">${item.name}</h4>
						ipsum dolor sit amet, consectetur adipisicing elit. Sunt ratione fuga repellat.
						<div class="row" style="padding-left: 16px;padding-top: 8px;">
							<i class="fa fa-facebook" style="padding-right: 14px;"></i>
							<i class="fa fa-twitter" style="padding-right: 14px;"></i>
							<i class="fa fa-pinterest" style="padding-right: 14px;"></i>
						</div>
					</div>
				</div>
				<div class="col-md-2" style="margin-top: 20px;">
					<h4 style="text-align: center;" id="price">${item.price}</h4>
				</div>
				<div class="col-md-2" style="margin-top: 20px;">
                    <div class="input-group number-spinner">
                        <span class="input-group-btn">
                            <button class="btn btn-default" data-dir="dwn"><span class="glyphicon glyphicon-minus"></span></button>
                        </span>
                        <input type="text" class="form-control text-center" id="amount_of" value="${item.amount_of}">
                        <span class="input-group-btn">
                            <button class="btn btn-default" data-dir="up"><span class="glyphicon glyphicon-plus"></span></button>
                        </span>
                    </div>
				</div>
				<div class="subtotal col-md-4" style="margin-top: 20px;text-align: center;">
                    <h4 style="text-align: center;display: inline-block;margin-right: 20px;" id="total_money">${item.total_money}</h4>
                    <i class="fa fa-times" id="remove" aria-hidden="true" style="font-size: 35px;color: #FE4D01;"></i>
				</div>
			</div>
        `
    }).join('');
    $("#list_product_cart").html(html);
});


//click number-spinner button
$(document).on('click', '.number-spinner button', function () {
    var btn = $(this),
        oldValue = btn.closest('.number-spinner').find('input').val(),
        newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    btn.closest('.number-spinner').find('input').val(newVal);

    var name = btn.closest('.product-cart').find("#name_product").text()
    var price = Number(btn.closest('.product-cart').find("#price").text());
    var amount_of = Number(btn.closest('.product-cart').find("#amount_of").val());
    btn.closest('.product-cart').find("#total_money").text(price * amount_of);

    var cart = JSON.parse(localStorage.getItem("cart"));
    cart.map(item => item.name == name ? item.amount_of = amount_of : item);
    cart.map(item => item.name == name ? item.total_money = price * amount_of : item);

    localStorage.setItem("cart", JSON.stringify(cart));
});


//key up amount of
$(document).on('keyup', '#amount_of', function () {
    var input = $(this);
    var name = input.closest('.product-cart').find("#name_product").text()
    var price = Number(input.closest('.product-cart').find("#price").text());
    var amount_of = Number(input.closest('.product-cart').find("#amount_of").val());
    input.closest('.product-cart').find("#total_money").text(price * amount_of);

    var cart = JSON.parse(localStorage.getItem("cart"));
    cart.map(item => item.name == name ? item.amount_of = amount_of : item);
    cart.map(item => item.name == name ? item.total_money = price * amount_of : item);

    localStorage.setItem("cart", JSON.stringify(cart));
});


//click delete
$(document).on('click', '#remove', function () {
    var remove = $(this);

    var name = remove.closest('.product-cart').find("#name_product").text()

    var cart = JSON.parse(localStorage.getItem("cart"));

    let index = cart.findIndex(element => {
        if (element.name === name) {
            return true;
        }
    });

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    remove.closest('.product-cart').remove();


});