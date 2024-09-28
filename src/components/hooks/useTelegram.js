const tg = window.Telegram.We
export function useTelegram(){
    const onClose = () => {
        tg.close()
    }
    const onToggleButton = () => {
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