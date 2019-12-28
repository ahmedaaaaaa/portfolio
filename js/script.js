// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);


// jquery
var targetSelector = '.mix';
var text = document.getElementById('text');
var newDom = '';
var animationDelay = 6;

var length = text.children.length;


for(let i = 0; i < text.innerText.length; i++)
{
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}


for(let i = 0; i < length; i++)
{
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}




       
    
  /*
             * @return {string}
           */

            function getSelectorFromHash() {
                var hash = window.location.hash.replace(/^#/g, '');

                var selector = hash ? '.' + hash : targetSelector;

                return selector;
            }

            /**
             * Updates the URL whenever the current filter changes.
             *
             * @param   {mixitup.State} state
             * @return  {void}
             */

            function setHash(state) {
                var selector = state.activeFilter.selector;
                var newHash = '#' + selector.replace(/^./g, '');

                if (selector === targetSelector && window.location.hash) {
                    // Equivalent to filter "all", remove the hash

                    history.pushState(null, document.title, window.location.pathname); // or history.replaceState()
                } else if (newHash !== window.location.hash && selector !== targetSelector) {
                    // Change the hash

                    history.pushState(null, document.title, window.location.pathname + newHash); // or history.replaceState()
                }
            }

            // Instantiate and configure the mixer

            var mixer = mixitup('.container', {
                selectors: {
                    target: targetSelector
                },
                load: {
                    filter: getSelectorFromHash() // Ensure that the mixer's initial filter matches the URL on startup
                },
                callbacks: {
                    onMixEnd: setHash // Call the setHash() method at the end of each operation
                }
            });

            // Add an "onhashchange" handler to keep the mixer in sync as the user goes
            // back and forward through their history.

            // NB: This may or may not be the desired behavior for your project. If you don't
            // want MixItUp operations to count as individual history items, simply use
            // 'replaceState()' instead of 'pushState()' within the 'setHash()' function above.
            // In which case this handler would no longer be neccessary.

            window.onhashchange = function() {
                var selector = getSelectorFromHash();

                if (selector === mixer.getState().activeFilter.selector) return; // no change

                mixer.filter(selector);
            };
       
        
           
            
           