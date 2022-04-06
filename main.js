// Sidebar left
const menuItems = document.querySelectorAll('.menu_item');

// Messages
const messagesNotification = document.querySelector('#message_notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize_theme');
const fontSizes = document.querySelectorAll('.choose_size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose_color span');
const background = document.querySelectorAll('.choose_bg');
const Bg1 = document.querySelector('.bg_1');
const Bg2 = document.querySelector('.bg_2');
const Bg3 = document.querySelector('.bg_3');

// Requests friend
const btnAccept1 = document.querySelector('.btn_accept_1');
const btnDecline1 = document.querySelector('.btn_decline_1');
const btnAccept2 = document.querySelector('.btn_accept_2');
const btnDecline2 = document.querySelector('.btn_decline_2');




// ---------- Active và Remove Active trong sidebar left ---------- 
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item =>{
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications'){
            document.querySelector('.notifications_popup').style.display = 'none';
        } else {
            document.querySelector('.notifications_popup').style.display = 'block';
            document.querySelector('#notifications .notifications_count').style.display = 'none';
        }
    })
})

// ====================  MESSAGES ====================


// ---------- Tìm kiếm MESSAGES ----------

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);


// ---------- Gỡ thông báo đỏ trên icon và hiện boxShadow MESSAGES ----------
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notifications_count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000);
})

// ====================  THEME ====================

// Open & Close modal method
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
const closeThemeModal = (event) => {
    if(event.target.classList.contains('customize_theme')){
        themeModal.style.display = 'none';
    }
}

//Open & Close modal
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);



// ====================  Font Size ====================

// remove active class from span of font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font_size_1')){
            fontSize = '15px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font_size_2')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if(size.classList.contains('font_size_3')){
            fontSize = '17px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if(size.classList.contains('font_size_4')){
            fontSize = '17.5px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if(size.classList.contains('font_size_5')){
            fontSize = '18px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })

})

// ====================  Color ====================

// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {

        // remove active class from colors
        changeActiveColorClass();

        if(color.classList.contains('color_1')){
            primaryHue = 252;
        } else if(color.classList.contains('color_2')){
            primaryHue = 52;
        } else if(color.classList.contains('color_3')){
            primaryHue = 352;
        } else if(color.classList.contains('color_4')){
            primaryHue = 152;
        } else if(color.classList.contains('color_5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// ====================  Background ====================

let whiteColorLightness;
let lightColorLightness;
let darkColorLightness;

// change background
const changeBG = () => {
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click', () => {
    whiteColorLightness = '100%';
    lightColorLightness = '95%';
    darkColorLightness = '17%';
    // add active
    Bg1.classList.add('active');
    // remove active
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg2.addEventListener('click', () => {
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    darkColorLightness = '95%';

    // add active
    Bg2.classList.add('active');
    // remove active
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    darkColorLightness = '95%';

    // add active
    Bg3.classList.add('active');
    // remove active
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})

// ==================== Requests friend ==================== 
btnAccept1.addEventListener('click', () => {
    btnAccept1.innerHTML = '<i class="uil uil-check"></i> Accepted';
    btnDecline1.style.display = 'none';
})

btnDecline1.addEventListener('click', () => {
    btnDecline1.innerHTML = '<i class="uil uil-check"></i> Rejected';
    btnAccept1.style.display = 'none';
})
btnAccept2.addEventListener('click', () => {
    btnAccept2.innerHTML = '<i class="uil uil-check"></i> Accepted';
    btnDecline2.style.display = 'none';
})

btnDecline2.addEventListener('click', () => {
    btnDecline2.innerHTML = '<i class="uil uil-check"></i> Rejected';
    btnAccept2.style.display = 'none';
})

// Change color like button
const change_color_heart = document.querySelectorAll('#change_color_heart');
change_color_heart.forEach( (color) => {
    color.addEventListener('click', () => {
        if (color.style.color == "red") {
            color.style.color = "black"
        } else {
            color.style.color = "red"
        }
        
    })
})


        // ========== Zoom photo feeds ==========

const ZoomPhoto1 = document.querySelector('#Zoom_photo_1')
const photoFeeds1 = document.querySelector('.photo_feeds_1')

const ZoomPhoto2 = document.querySelector('#Zoom_photo_2')
const photoFeeds2 = document.querySelector('.photo_feeds_2')

const ZoomPhoto3 = document.querySelector('#Zoom_photo_3')
const photoFeeds3 = document.querySelector('.photo_feeds_3')

        // ====== Open & Close Zoom photo feeds method==========

const openPhotoFeeds1 = () => {
    photoFeeds1.style.display = 'grid';
}
const closePhotoFeeds1 = (event) => {
    if(event.target.classList.contains('photo_feeds_1')){
        photoFeeds1.style.display = 'none';
    }
}

const openPhotoFeeds2 = () => {
    photoFeeds2.style.display = 'grid';
}
const closePhotoFeeds2 = (event) => {
    if(event.target.classList.contains('photo_feeds_2')){
        photoFeeds2.style.display = 'none';
    }
}

const openPhotoFeeds3 = () => {
    photoFeeds3.style.display = 'grid';
}
const closePhotoFeeds3 = (event) => {
    if(event.target.classList.contains('photo_feeds_3')){
        photoFeeds3.style.display = 'none';
    }
}

        // ========== Open & Close Zoom photo feeds ==========

photoFeeds1.addEventListener('click', closePhotoFeeds1);
ZoomPhoto1.addEventListener('click', openPhotoFeeds1);

photoFeeds2.addEventListener('click', closePhotoFeeds2);
ZoomPhoto2.addEventListener('click', openPhotoFeeds2);

photoFeeds3.addEventListener('click', closePhotoFeeds3);
ZoomPhoto3.addEventListener('click', openPhotoFeeds3);




// ========== Story show ==========

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".story_item");
const panes = $$(".story_pane");

const tabActive = $(".story_item.active");


tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".story_item.active").classList.remove("active");
    $(".story_pane.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});

// ========== Open % close Story show ==========

const openStory = document.querySelector('#open_story')
const storyContent = document.querySelector('.story_show')

const openStoryMethod = () => {
    storyContent.style.display = 'grid';
}
const closeStoryMethod = (event) => {
    if(event.target.classList.contains('story_show')){
        storyContent.style.display = 'none';
    }
}


openStory.addEventListener('click', openStoryMethod);
storyContent.addEventListener('click', closeStoryMethod);