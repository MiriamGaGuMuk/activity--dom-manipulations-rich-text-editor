/**
 * TASK 1: Add an event listener to the `<button class="rte-italics">`.
 *
 *         When user clicks, it should toggle the `fontStyle` property
 *         value of the `<p class="textbox"></p>` to «italic».
 */
    document.querySelector('.rte-fontstyle, rte-italics').addEventListener('click', function(){
        let textbox = document.querySelector('.textbox');
        // textbox.classList.toggle("change");
        textbox.style.fontStyle = "italic";

    });
        

/**
 * TASK 2: Add an event listener to the `<button class="rte-bold"></button>`.
 *
 *         When user clicks, it should toggle the `fontWeight` property
 *         value of the `<p class="textbox"></p>` to 700.
 */ 
    document.querySelector('.rte-fontstyle, rte-bold').addEventListener('click', function(){
        let textbox = document.querySelector('.textbox');
        textbox.style.fontWeight = "bold";
    });


/**
 * TASK 3:
 * Add event listeners to the `<button class="rte-fontsize"></button>` elements.
 *
 *         When user clicks, it should change the `fontSize` property of the
 *         `<p class="textbox"></p>` to the value of the button that was clicked.
 */
    document.querySelector('.rte-fontsize').addEventListener('click', function(){
        let textbox = document.querySelector('.textbox');
        var btn = document.querySelector('.rte-fontsize')
        textbox.style.fontSize = btn.textContent
    });

/**
 * TASK 4:
 * Add event listener to the `<button class="rte-fontcolor"></button>` elements.
 *
 *         When user clicks, it should take the value from the `data-color`
 *         attribute and set the `color` property of the `<p class="textbox"></p>`
 *
 *         To access data-* attributes
 *         https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */
    let palete = document.querySelectorAll(".color-palette button")
    // console.log(fondoTexto);
    function changeBackground() {

    let color = this.className
    // console.log(color);
    document.querySelector(".textbox").className = "textbox" + color;

    }
    for (let i = 0; i < palete.length; i++) {

        let buttonPalete = palete[i]

    buttonPalete.addEventListener('click', changeBackground)
    }


   