class Login {
    get url(){
        return "?controller=authentication";
    }

    get emailInput(){
        return $("#email");
    }

    get passwordInput(){
        return $("#passwd");
    }

    get signInButton() {
        return $("#SubmitLogin");
    }

    get errorMessage() {
        return $(".alert.alert-danger > ol");
    }

}

module.exports = new Login();