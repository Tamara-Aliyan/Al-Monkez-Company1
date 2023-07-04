const container = document.querySelector('.container');
    const getA = document.querySelectorAll('a');

    getA.forEach(function(a) {
        // console.log(a);
        a.addEventListener('click',function() {
            container.classList.toggle('active');
        })
    })


            // Stuff btn
            const btns = document.querySelectorAll('.btn');
            const btnsm = document.querySelector('.btn-sm');
            const btnmd = document.querySelector('.btn-md');
            const btnlg = document.querySelector('.btn-lg');
            const h2 = document.querySelector('.content h2');
            const p = document.querySelector('.content p');
    
            btns.forEach(btn => {
                btn.onclick = function () {
    
                    // active
                    btns.forEach(btn => {
                        btn.classList.remove('active');
                    })
                    btn.classList.add('active');
    
                    // Font Size
                    switch (btn.classList[1]) {
                        case 'btn-sm':
                            h2.style.fontSize = '1.5em';
                            p.style.fontSize = '1em';
                            break;
                        case 'btn-md':
                            h2.style.fontSize = '1.65em';
                            p.style.fontSize = '1.15em';
                            break;
                        case 'btn-lg':
                            h2.style.fontSize = '1.8em';
                            p.style.fontSize = '1.3em';
                            break;
                    }
                }
            });

            const liItem = document.querySelectorAll('ul li');
            const imgItem = document.querySelectorAll('.product img');

            liItem.forEach(li => {
            li.onclick = function() {
                //active
                liItem.forEach(li => {
                    li.className = "";
                })
                li.className = "active";

                //Filter
                const value = li.textContent;
                imgItem.forEach(img => {
                    img.style.display = 'none';
                    if (img.getAttribute('data-filter') == value.toLowerCase() || value == "All") {
                        img.style.display = 'block';
                    }
                })
            }
            });