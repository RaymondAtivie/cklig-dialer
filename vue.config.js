module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/scss/_variables.scss";
                    @import "@/assets/scss/_colors.scss";
                `
            }
        }
    }
};