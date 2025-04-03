// Function to filter products based on search input
document.getElementById('search').addEventListener('keyup', function() {
    var input = this.value.toLowerCase();
    var products = document.querySelectorAll('.products li');

    products.forEach(function(product) {
        var productName = product.querySelector('.product_bottom p').textContent.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// click to search
const search_button = document.getElementById('search_bar');
const search_input = document.getElementById('search_mobile');
search_button.addEventListener('click', () => {
    search_input.style.display = "block"
})


// click to view menu
const mobile_button = document.getElementById('filter');
const menu = document.getElementById('mobile_screen');
const  sale = document.getElementById('sale')
mobile_button.addEventListener("click", ()=>{  
    if (menu.style.display === "none"){
        menu.style.display = "block"
        mobile_button.innerText = "Hide"
        sale.style.display = "block"
        sale.addEventListener("click", () => {
            menu.style.display = "none"
            mobile_button.innerText = "Filter"
            sale.style.display = "none"
        })

    }else{
        menu.style.display = "none"
        mobile_button.innerText = "Filter"
        sale.style.display = "none"
    }
})

// mobile search
document.getElementById('search_mobile').addEventListener('keyup', function() {
    var input = this.value.toLowerCase();
    var products = document.querySelectorAll('.products li');

    products.forEach(function(product) {
        var productName = product.querySelector('.product_bottom p').textContent.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// the products fetched can be only display on live servers 
// due to the way web browsers handle requests for local files

const productlist = document.getElementById("product_list");
window.addEventListener("load", function() {
    fetch('js/products.json').then(response => {
        if (!response.ok) {
            throw new Error('Error in network response');
        }
        return response.json();
    }).then(data => {
        const listitems = data.products.map(product => {
            const listitem = document.createElement("li");
            listitem.innerHTML = `<div class="product_top" style="background-image:url(${product.image});">
                                        <div class="top">
                                            <span class="offer">${product.offer}%</span>
                                            <img src="images/Vector (8).svg" alt="images"/>
                                        </div>
                                        <div class="select">
                                            <span class="orange"></span>
                                            <span class="white"></span>
                                        </div>
                                        <span class="organic">
                                            <img src="images/organic.svg" alt="image"/>
                                            ORGANIC
                                        </span>
                                    </div>
                                    <div class="product_bottom">
                                        <p>${product.name}</p>
                                        <span class="rating">
                                            <img src="${product.star}" alt="star"/>
                                            <small>${product.rating}</small>
                                        </span>
                                        <span class="price">
                                            <h3>$${product.price}</h3>
                                            <del>$${product.deleted_price}</del>
                                        </span>
                                        <span class="stock">
                                            <span class="cart"><img src="images/cart white.svg" alt="image"/></span>
                                            <small class="instock">IN STOCK</small>
                                        </span>
                                    </div>`;
            return listitem;
        });
        productlist.append(...listitems);
    })
    .catch(error => {
        console.log("Error:", error);
    });
});
// Select all checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.nextElementSibling; // Get the sibling label element

        // Toggle class based on checkbox state
        if (this.checked) {
            label.classList.add('checked,'); // Add class when checked
           
        } else {
            label.classList.remove('checked'); // Remove class when unchecked
        }
    });
});

// Select all checkboxes
const checkbox = document.querySelectorAll('input[type="checkbox"]');

checkbox.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('label'); // Get the closest parent label element

        // Check if the checkbox is checked
        if (this.checked) {
            label.classList.add('active'); // Add the 'active' class to label when checked
        } else {
            label.classList.remove('active'); // Remove the 'active' class when unchecked
        }
    });
});




