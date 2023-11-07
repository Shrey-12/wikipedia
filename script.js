var vm = new Vue({
    el: '#wikipedia',
    data: {
        searchQuery: '',
        isResult: false,
        wikiObj: null,
    },
    methods: {
        removeSearchQuery: function () {
            this.searchQuery = '';
            this.isResult = false;
        },
        submitSearch: function () {
            var reqURL = "https://en.wikipedia.org/w/api.php?action=query&origin=*&generator=search&gsrnamespace=0&exsentences=1&exintro&explaintext&exlimit=max&prop=extracts&gsrlimit=10&gsrsearch=" + this.searchQuery + "&format=json";

            fetch(reqURL, { mode: "cors", method: "GET" })
                .then(response => response.json())
                .then(data => {
                    this.wikiObj = data.query.pages;
                    this.isResult = true;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});
