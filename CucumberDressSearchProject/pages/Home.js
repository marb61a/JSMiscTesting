class Home{
    get url() {
        return "/";
    }
    get searchField() {
        return $("#search_query_top");
    }

    get searchButton() {
        return $(".btn.btn-default.button-search");
    }
    
}

module.exports = new Home();