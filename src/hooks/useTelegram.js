const tg = window.Telegram.WebApp;

export function useTelegram(){
    const onClose = () => {
        tg.close()
    }
    const onToggleButton = () => {
        tg.enableClosingConfirmation();
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else{
            tg.MainButton.show();
        }
    }
    const onClicker = (number) => {
        prevNumber => prevNumber + 1;
    }
    return {
        onClose,
        tg,
        onClicker,
        user: tg.initDataUnsafe?.user,
    }
}