var mongoose = require("mongoose");

const isPhone = function(V){
    return /\d{3}-\d{3}-\d{4}/.test(v);
}
const ranks = [1,2,3];
const clinics = [1,2,3];
const declarationSchema = mongoose.Schema({
    suspectIdentityNumber: {type: String, required: true},
    suspectFirstName: {type: String, required: true},
    suspectLastName: {type: String, required: true},
    suspectPhoneNumer: {type: String, validate: [isPhone,'phone number required'], required: true},
    suspectTimeOfPositioning: {type: Date, required: true},
    suspectPlaceOfPositioning: {type: String, required: true},
    reporterFirstName: {type: String, required: true},
    reporterLastName: {type: String, required: true},
    reporterRank: {type: Number, enum: ranks, required: true},
    reporterIdentityNumber: {type: String, required: true},
    reporterMail: {type: String, required: true},
    reporterPhoneNumber:  {type: String, validate: [isPhone,'phone number required'], required: true},
    clinicInCharge: {type: Number, enum: clinics, required: true},
    suspectHasDeclaredInocense: {type: Boolean, required: true},
    suspectWasInBaseDuringPos: {type: Boolean, required: true},
    suspectWasSentToConfinment: {type: Boolean, required: true},
    isColonelConfinment: {type: Boolean, required: true},
    isClinicConfinment: {type: Boolean, required: true},
    wasExported: {type: Boolean},
    workFinished: {type: Boolean},
    reporterNotes: {type: String},
    clinicNotes: {type: String},
    hamalNotes: {type: String}
});

declarationSchema.set("versionKey", false);
module.exports = mongoose.model('declaration',declarationSchema, 'declarations');



