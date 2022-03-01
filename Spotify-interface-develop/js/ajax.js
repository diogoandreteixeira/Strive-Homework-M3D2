const bookWrapper = document.querySelector(".top-boxes")
const bookWrapper2 = document.querySelector(".main-page-large-box")
const bookWrapper3 = document.querySelector(".shows-to-try")

        function loadBooks() {
            console.log("Loading books...")

            fetch("https://striveschool-api.herokuapp.com/books")
                .then(response => {
                    console.log(response.status)
                    return response.json()
                })
                .then(books => {
                    for (const book of books) {
                        bookWrapper.innerHTML += `
                        <div class="col-6 col-sm-6 col-md-3 col-lg-2">
                        <div class="large-boxes">
                            <div class="large-boxes_box">
                                <img class="box-img" src="${book.img}" alt="soul album">
                                <div class="large-boxes_box-title">${book.title}</div>
                                <div class="large-boxes_box-title-description">${book.category}</div>
                            </div>
                        </div>
                    </div>
                        `
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        }

        function loadBooks2() {
            console.log("Loading books...")

            fetch("https://striveschool-api.herokuapp.com/books")
                .then(response => {
                    console.log(response.status)
                    return response.json()
                })
                .then(books => {
                    for (const book of books) {
                        bookWrapper2.innerHTML += `
                        <div class="col-6 col-sm-6 col-md-3 col-lg-2">
                        <div class="large-boxes">
                            <div class="large-boxes_box">
                                <img class="box-img" src="${book.img}" alt="soul album">
                                <div class="large-boxes_box-title">${book.title}</div>
                                <div class="large-boxes_box-title-description">${book.category}</div>
                            </div>
                        </div>
                    </div>
                        `
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        }
        function loadBooks3() {
            console.log("Loading books...")

            fetch("https://striveschool-api.herokuapp.com/books")
                .then(response => {
                    console.log(response.status)
                    return response.json()
                })
                .then(books => {
                    for (const book of books) {
                        bookWrapper3.innerHTML += `
                        <div class="col-6 col-sm-6 col-md-3 col-lg-2">
                        <div class="large-boxes">
                            <div class="large-boxes_box">
                                <img class="box-img" src="${book.img}" alt="soul album">
                                <div class="large-boxes_box-title">${book.title}</div>
                                <div class="large-boxes_box-title-description">${book.category}</div>
                            </div>
                        </div>
                    </div>
                        `
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        }

        loadBooks()
        loadBooks2()
        loadBooks3()

/* const albumWrapper = document.querySelector(".top-boxes")

        function loadAlbum() {
            console.log("Loading Albums...")

            fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
                .then(response => {
                    console.log(response.status)
                    return response.json()
                })
                .then(albums => {
                    for (const album of albums) {
                        albumWrapper.innerHTML += `
                        <div class="col-6 col-sm-6 col-md-3 col-lg-2">
                        <div class="large-boxes">
                            <div class="large-boxes_box">
                                <img class="box-img" src="${data.img}" alt="soul album">
                                <div class="large-boxes_box-title">${data["title"]}</div>
                                <div class="large-boxes_box-title-description">${album.category}</div>
                            </div>
                        </div>
                    </div>
                        `
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        }

        loadAlbum() */