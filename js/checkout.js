//validate login
function validateLogin() {

    if (document.myForm.email.value == "") {
        $('#mess_email').text('Bạn hãy nhập email!');
        $('#mess_password').text('');
        document.myForm.email.focus();
        return false;
    }

    if (document.myForm.password.value == "") {
        $('#mess_password').text('Bạn hãy nhập password!');
        $('#mess_email').text('');
        document.myForm.password.focus();
        return false;
    }

    var emailID = document.myForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        $('#mess_email').text('Hãy nhập cú pháp email hợp lệ! (vd:Example@gmail.com)');
        $('#mess_password').text('');
        document.myForm.email.focus();
        return false;
    }

    if (document.myForm.password.value.length != 8) {
        $('#mess_password').text('Password phải đủ 8 kí tự!');
        $('#mess_email').text('');
        document.myForm.password.focus();
        return false;
    }
    return (true);
}

//validate checkout

function validateCheckout() {
    if (document.myForm_checkout.email_checkout.value == "") {
        $('#mess_email_checkout').text('Bạn hãy nhập email!');
        $('#mess_firstName').text('');
        $('#mess_surname').text('');
        $('#mess_company').text('');
        $('#mess_address_line1').text('');
        $('#mess_address_line2').text('');
        $('#mess_postal_code').text('');
        $('#mess_tow_city').text('');
        $('#mess_phone').text('');
        $('#mess_credit_card').text('');
        $('#mess_cecure_code').text('');
        $('#mess_name_card').text('');
        document.myForm_checkout.email_checkout.focus();
        return false;
    }

    if (document.myForm_checkout.firstName.value == "") {
        $('#mess_firstName').text('Bạn hãy nhập firstname!');
        $('#mess_email_checkout').text('');
        $('#mess_surname').text('');
        $('#mess_company').text('');
        $('#mess_address_line1').text('');
        $('#mess_address_line2').text('');
        $('#mess_postal_code').text('');
        $('#mess_tow_city').text('');
        $('#mess_phone').text('');
        $('#mess_credit_card').text('');
        $('#mess_cecure_code').text('');
        $('#mess_name_card').text('');
        document.myForm_checkout.firstName.focus();
        return false;
    }

    if (document.myForm_checkout.surName.value == "") {
        $('#mess_surName').text('Bạn hãy nhập surename!');
        $('#mess_email_checkout').text('');
        $('#mess_firstName').text('');
        $('#mess_company').text('');
        $('#mess_address_line1').text('');
        $('#mess_address_line2').text('');
        $('#mess_postal_code').text('');
        $('#mess_tow_city').text('');
        $('#mess_phone').text('');
        $('#mess_credit_card').text('');
        $('#mess_cecure_code').text('');
        $('#mess_name_card').text('');
        document.myForm_checkout.surName.focus();
        return false;
    }

    if (document.myForm_checkout.company.value == "") {
        $('#mess_company').text('Bạn hãy nhập company!');
        $('#mess_email_checkout').text('');
        $('#mess_firstName').text('');
        $('#mess_surName').text('');
        $('#mess_address_line1').text('');
        $('#mess_address_line2').text('');
        $('#mess_postal_code').text('');
        $('#mess_tow_city').text('');
        $('#mess_phone').text('');
        $('#mess_credit_card').text('');
        $('#mess_cecure_code').text('');
        $('#mess_name_card').text('');
        document.myForm_checkout.company.focus();
        return false;
    }

    if (document.myForm_checkout.address_line1.value == "") {
        $('#mess_address_line1').text('Bạn hãy nhập address line 1!');
        $('#mess_email_checkout').text('');
        $('#mess_firstName').text('');
        $('#mess_surName').text('');
        $('#mess_company').text('');
        $('#mess_address_line2').text('');
        $('#mess_postal_code').text('');
        $('#mess_tow_city').text('');
        $('#mess_phone').text('');
        $('#mess_credit_card').text('');
        $('#mess_cecure_code').text('');
        $('#mess_name_card').text('');
        document.myForm_checkout.address_line1.focus();
        return false;
    }

    if (document.myForm_checkout.address_line2.value == "") {
        $('#mess_address_line2').text('Bạn hãy nhập address line 2!');
        $('#mess_email_checkout').text('');
        $('#mess_firstName').text('');
        $('#mess_surName').text('');
        $('#mess_company').text('');
        $('#mess_address_line1').text('');
        $('#mess_postal_code').text('');
        $('#mess_tow_city').text('');
        $('#mess_phone').text('');
        $('#mess_credit_card').text('');
        $('#mess_cecure_code').text('');
        $('#mess_name_card').text('');
        document.myForm_checkout.address_line2.focus();
        return false;
    }

    if (document.myForm_checkout.postal_code.value == "") {
        $('#mess_postal_code').text('Bạn hãy nhập postal code!');
        $('#mess_email_checkout').text('');
        $('#mess_firstName').text('');
        $('#mess_surName').text('');
        $('#mess_company').text('');
        $('#mess_address_line1').text('');
        $('#mess_address_line2').text('');
        $('#mess_tow_city').text('');
        $('#mess_phone').text('');
        $('#mess_credit_card').text('');
        $('#mess_cecure_code').text('');
        $('#mess_name_card').text('');
        document.myForm_checkout.postal_code.focus();
        return false;
    }

    if (document.myForm_checkout.tow_city.value == "") {
        $('#mess_tow_city').text('Bạn hãy nhập tow/city!');
        $('#mess_email_checkout').text('');
        $('#mess_firstName').text('');
        $('#mess_surName').text('');
        $('#mess_company').text('');
        $('#mess_address_line1').text('');
        $('#mess_address_line2').text('');
        $('#mess_postal_code').text('');
        $('#mess_phone').text('');
        $('#mess_credit_card').text('');
        $('#mess_cecure_code').text('');
        $('#mess_name_card').text('');
        document.myForm_checkout.tow_city.focus();
        return false;
    }

    if (document.myForm_checkout.phone.value == "") {
        $('#mess_phone').text('Bạn hãy nhập phone!');
        $('#mess_email_checkout').text('');
        $('#mess_firstName').text('');
        $('#mess_surName').text('');
        $('#mess_company').text('');
        $('#mess_address_line1').text('');
        $('#mess_address_line2').text('');
        $('#mess_postal_code').text('');
        $('#mess_tow_city').text('');
        $('#mess_credit_card').text('');
        $('#mess_cecure_code').text('');
        $('#mess_name_card').text('');
        document.myForm_checkout.phone.focus();
        return false;
    }

    if (document.myForm_checkout.credit_card.value == "") {
        $('#mess_credit_card').text('Bạn hãy nhập credit card!');
        $('#mess_email_checkout').text('');
        $('#mess_firstName').text('');
        $('#mess_surName').text('');
        $('#mess_company').text('');
        $('#mess_address_line1').text('');
        $('#mess_address_line2').text('');
        $('#mess_postal_code').text('');
        $('#mess_tow_city').text('');
        $('#mess_phone').text('');
        $('#mess_cecure_code').text('');
        $('#mess_name_card').text('');
        document.myForm_checkout.credit_card.focus();
        return false;
    }

    if (document.myForm_checkout.cecure_code.value == "") {
        $('#mess_cecure_code').text('Bạn hãy nhập cecure code!');
        $('#mess_email_checkout').text('');
        $('#mess_firstName').text('');
        $('#mess_surName').text('');
        $('#mess_company').text('');
        $('#mess_address_line1').text('');
        $('#mess_address_line2').text('');
        $('#mess_postal_code').text('');
        $('#mess_tow_city').text('');
        $('#mess_phone').text('');
        $('#mess_credit_card').text('');
        $('#mess_name_card').text('');
        document.myForm_checkout.cecure_code.focus();
        return false;
    }

    if (document.myForm_checkout.name_card.value == "") {
        $('#mess_name_card').text('Bạn hãy nhập name card!');
        $('#mess_email_checkout').text('');
        $('#mess_firstName').text('');
        $('#mess_surName').text('');
        $('#mess_company').text('');
        $('#mess_address_line1').text('');
        $('#mess_address_line2').text('');
        $('#mess_postal_code').text('');
        $('#mess_tow_city').text('');
        $('#mess_phone').text('');
        $('#mess_credit_card').text('');
        $('#mess_cecure_code').text('');
        document.myForm_checkout.name_card.focus();
        return false;
    }

    var emailID = document.myForm.email_checkout.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        $('#mess_email_checkout').text('Hãy nhập cú pháp email hợp lệ! (vd:Example@gmail.com)');
        $('#mess_firstName').text('');
        $('#mess_surname').text('');
        $('#mess_company').text('');
        $('#mess_address_line1').text('');
        $('#mess_address_line2').text('');
        $('#mess_postal_code').text('');
        $('#mess_tow_city').text('');
        $('#mess_phone').text('');
        $('#mess_credit_card').text('');
        $('#mess_cecure_code').text('');
        $('#mess_name_card').text('');
        document.myForm.email_checkout.focus();
        return false;
    }
}