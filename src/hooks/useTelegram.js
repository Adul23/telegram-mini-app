const tg = window.Telegram.WebApp;

export function useTelegram(){
    const onClose = () => {
        tg.close()
    }
    const onToggleButton = () => {
        console.log(tg.initDataUnsafe?.user?.username);
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else{
            tg.MainButton.show();
        }
    }
    
    return {
        onClose,
        tg,
        
        user: tg.initDataUnsafe?.user,
    }
}