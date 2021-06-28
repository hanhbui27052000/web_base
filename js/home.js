
fetch('http://localhost:3000/products')
	.then(function (response) {
		if (!response.ok) {
			throw Error('error');
		}
		return response.json();
	})
	.then(function (data) {
		var html = data.map(item => {
			return `
			<div class="col-md-3" style="padding: 10px;background-color: #FFFFFF;">
				<a href="product-details.html">
					<img src="${item.image}" onclick="productDetail('${item.id}')" style="margin-left: 22px;">
				</a>
				<div style="margin-top: 12px;margin-bottom: 10px;">
					<h4 style="display: inline-block;font-weight: bold;margin-left: 15px;">${item.name}</h4>
					<h4 style="display: inline-block;font-weight: bold;margin-left: 90px;">${item.price}$</h4>
				</div>
				<div class="btn-addcart">
					<button class="btn btn-primary" onclick="addToCart('${item.id}','${item.name}','${item.image}','${item.price}')">Add to cart</button>
				</div>
			</div>
		    `
		}).join('');
		$(".list-product").html(html);
		//console.log(data);
	})

//add to cart
function addToCart(id, name, image, price) {
	var cart = JSON.parse(localStorage.getItem("cart"));
	if (cart == null) {
		cart = [];
	}
	if (checkData(id) == true) {
		var product = {
			"id": id,
			"name": name,
			"image": image,
			"amount_of": 1,
			"price": price,
			"total_money": price
		}
		cart.push(product);
	}
	else {
		cart.map(item => item.id == id ? item.amount_of++ : item);
		cart.map(item => item.id == id ? item.total_money = Number(item.total_money) + Number(item.price) : item);
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

//fuction productDetail

function productDetail(id) {
	var id_product_curent = localStorage.getItem("id_product_curent");
	if (id_product_curent == null) {
		localStorage.setItem("id_product_curent", id);
	}
	else {
		localStorage.removeItem("id_product_curent");
		localStorage.setItem("id_product_curent", id);
	}
}