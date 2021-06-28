function validate() {

    if (document.myForm.fullname.value == "") {
        $('#mess_fullname').text('Bạn hãy nhập họ tên!');
        $('#mess_email').text('');
        $('#mess_company').text('');
        $('#mess_subject').text('');
        $('#mess_message').text('');
        document.myForm.fullname.focus();
        return false;
    }

    if (document.myForm.email.value == "") {
        $('#mess_email').text('Bạn hãy nhập email!');
        $('#mess_fullname').text('');
        $('#mess_company').text('');
        $('#mess_subject').text('');
        $('#mess_message').text('');
        document.myForm.email.focus();
        return false;
    }

    if (document.myForm.company.value == "") {
        $('#mess_company').text('Bạn hãy nhập company!');
        $('#mess_fullname').text('');
        $('#mess_email').text('');
        $('#mess_subject').text('');
        $('#mess_message').text('');
        document.myForm.company.focus();
        return false;
    }

    if (document.myForm.subject.value == "") {
        $('#mess_subject').text('Bạn hãy nhập subject!');
        $('#mess_fullname').text('');
        $('#mess_email').text('');
        $('#mess_company').text('');
        $('#mess_message').text('');
        document.myForm.subject.focus();
        return false;
    }

    if (document.myForm.message.value == "") {
        $('#mess_message').text('Bạn hãy nhập message!');
        $('#mess_fullname').text('');
        $('#mess_email').text('');
        $('#mess_company').text('');
        $('#mess_subject').text('');
        document.myForm.message.focus();
        return false;
    }

    var emailID = document.myForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        $('#mess_email').text('Hãy nhập cú pháp email hợp lệ! (vd:Example@gmail.com)');
        $('#mess_fullname').text('');
        $('#mess_company').text('');
        $('#mess_subject').text('');
        $('#mess_message').text('');
        document.myForm.email.focus();
        return false;
    }
    return (true);
}