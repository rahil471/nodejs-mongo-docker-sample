module.exports = function(mongoose){
    return [{
    name: {type: String, required: true},
    email: {type: String}
}, {
    timestamps: true,
    createdby: true,
    updatedby: true
}]
};