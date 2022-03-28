export default {
    
    formatName(chiropractor) {
        return chiropractor.firstName + " " + chiropractor.lastName;
    },

    formatLink(chiropractor) {
        return (chiropractor.firstName + "-" + chiropractor.lastName).toLowerCase();
    }

}