const toggleMenu = () => {
    document.querySelector('.menu').classList.toggle('hide')
}

var articles, tabs;

const registerTabs = () => {
    tabs = document.querySelectorAll('.tabLinks li a');
    articles = document.querySelectorAll('.tabNav article');
    
    for(i = 0; i < tabs.length; i++) {
        var tab = tabs[i];
        setTabHandler(tab, i);
    }    
}

function setTabHandler(tab, tabPos) {
    tab.onclick = function() {
      for(i = 0; i < tabs.length; i++) {
        tabs[i].className = '';
      }
  
      tab.className = 'active';
  
      for(i = 0; i < articles.length; i++) {
          articles[i].className = '';
      }
  
      articles[tabPos].className = 'active-tab';
    }
  }