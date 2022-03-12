global.NeonX = {
    getDiscord() {
        return 'https://neonx.page.link/discord';
    },
    getShop() {
        return 'https://neonx.tebex.io/';
    },
    settings(x) {
        switch (x) {
            case 'unlockCommands':
                global.NeonX = {
                    ...global.NeonX,
                    getEasterEgg() {
                        return 'nOt eVEn ClOse baBy';
                    },
                };
                break;
        }
    },
};
