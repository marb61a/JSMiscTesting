class Home{
    get url(){
        return "/";
    }
    get searchField(){
        return $("#search_query_top");
    }

    get searchButton(){
        return $(".btn.btn-default.button-search");
    }

    get womenMenuOption(){
        return $("ul.menu-content > li > a[title='Women']");
    }

    get dressesMenuOption(){
        return $("ul.menu-content > li > a[title='Dresses']");
    }

    get tshirtMenuOption(){
        return $("ul.menu-content > li > a[title='T-shirts']");
    }

    // Search for a keyword
    search(keyword){
        this.searchField.waitForDisplayed(2000);
        this.searchField.setValue(keyword);
        this.searchButton.click();
    }

    // Clicking a menu option
    selectMenuOption(option){
        switch(option){
            case "Women":
                this.womenMenuOption.click();
                break;
            case "Dresses":
                this.dressesMenuOption.click();
                break;
            case "T-Shirts":
                this.tshirtMenuOption.click();
                break;
            default:
                console.log(`Invalid Option ${option}`);
        }
    }

}

module.exports = new Home();