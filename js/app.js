'use strict';

document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań

var menuButton = document.querySelector('.for-dropdown');
    
var subMenu = document.querySelector('.dropdown');
    
    menuButton.addEventListener('mouseover', function() {
       subMenu.style.display = 'block';
    });

     menuButton.addEventListener('mouseout', function() {
         subMenu.style.display = 'none';
    });
    
    
var buttons = document.querySelectorAll('.read-more');
    console.log(buttons);
    
console.log(buttons[0].previousElementSibling); // Powinien wyświetlić się w konsoli paragraf o klasie `more`

    
function showHide() {
    
var textArea = this.previousElementSibling;
    
    if (textArea.style.display === 'none' || textArea.style.display === ''){
        
        textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        
    } else {
        
        textArea.style.display = 'none';
        this.innerHTML = 'Więcej <span class="glyphicon glyphicon-chevron-down"></span>';
    }
    
    
}
    
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showHide);
}    
 

var menuGorne = document.querySelector('.navbar');
    
 window.addEventListener('scroll', function() {
    
     menuGorne.style.borderBottom = '3px solid #7f7f7f';
    
    });
    
var tytulStrony = document.querySelector('.navbar-brand');
    
    

    
    
});