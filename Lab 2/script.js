function validateSearchForm() {
    let x = document.getElementById('searchText').value;
    if (x == "" || x == " " ) {
        alert("Search query must be filled out");
        return false;
    }
    else{

        return true;
    }
}