
var id = localStorage.getItem("id_product_curent");
var product = {};
fetch('http://localhost:3000/products')
    .then(function (response) {
        if (!response.ok) {
            throw Error('error');
        }
        return response.json();
    })
    .then((data) => {
        data.map(item => {
            if (item.id == id) {
                $('#id_product').text(item.id);
                $("#img_product").attr("src", item.image);
                $("#img_product_slide1").attr("src", item.image);
                $("#img_product_slide2").attr("src", item.image);
                $("#img_product_slide3").attr("src", item.image);
                $('#name_product').text(item.name);
                $('#price_product').text(item.price);
            }
        })
    })


//add to cart
function addToCart() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var id_product = $('#id_product').text();
    var name = $('#name_product').text();
    var image = $('#img_product').attr('src');
    var amount_of = $('#amount_of').val();
    var price = $('#price_product').text();

    if (cart == null) {
        cart = [];
    }
    if (checkData(id) == true) {
        var product = {
            "id": id_product,
            "name": name,
            "image": image,
            "amount_of": amount_of,
            "price": price,
            "total_money": price * amount_of
        }
        cart.push(product);
    }
    else {
        cart.map(item => item.id == id ? item.amount_of = Number(item.amount_of) + Number(amount_of) : item);
        cart.map(item => item.id == id ? item.total_money = Number(item.total_money) + Number(price * amount_of) : item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    swal("Bạn đã thêm sản phẩm vào giỏ hàng thành công!", "You clicked the button!", "success");
}

function checkData(id) {
    var flag = true;
    var cart = JSON.parse(localStorage.getItem("cart"));

    if (cart == null) {
        cart = [];
    }
    cart.map(item => {
        if (item.id == id) {
            flag = false;
        }
    });
    return flag;
}
