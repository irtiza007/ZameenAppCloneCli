import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

let strings = new LocalizedStrings({
 "en-US":{
Homes:'Homes',
FILTERS:'FILTERS',
SORT:'SORT',
Save:'Save',
Search_Result:'Search Result',
Crore:'Crore',
House:'منزل',
Updated:'Updated',
time:'2 hours ago'
 },
 ar: {
  Homes:'الصفحة الرئيسية',
  FILTERS:'مرشحات',
  SORT:'فرز',
  Save:'حفظ',
  Search_Result:'نتيجة البحث',
  Crore:'الكرور عشرة ملا يين',
  Home:'منزل',
  Updated:'محدث',
  time:'منذ 2 ساعات'
},
});

export default strings;