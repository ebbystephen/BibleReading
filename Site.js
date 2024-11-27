var settings = [];

var OldTestament_LSN = 'old_testament@$111';
var OldChapters = 'old_chapters@$111';
var NewTestament_LSN = 'new_testament@$111';
var NewChapters = 'new_chapters@$111';
var PrayerVersion = 'prayer_Version@$111';

function LoadFromJSON(key) {
    var jsonArray = {};
    if (localStorage.getItem(key) == null) {
        if (key == OldTestament_LSN) {
            jsonArray = [
                { id: 0, val: 'ഉല്‍‍പത്തി Genesis' },
                { id: 1, val: 'പുറപ്പാട് Exodus' },
                { id: 2, val: 'ലേവ്യര്‍ Leviticus' },
                { id: 3, val: 'സംഖ്യ Numbers' },
                { id: 4, val: 'നിയമാവര്‍ത്തനം Deuteronomy' },
                { id: 5, val: 'ജോഷ്വാ Joshua' },
                { id: 6, val: 'ന്യായാധിപ‌ന്‍‍മാര്‍ Judges' },
                { id: 7, val: 'റൂത്ത് Ruth' },
                { id: 8, val: '1 സാമുവല്‍ 1 Samuel' },
                { id: 9, val: '2 സാമുവല്‍ 2 Samuel' },
                { id: 10, val: '1 രാജാക്ക‌ന്‍‍മാര്‍ 1 Kings' },
                { id: 11, val: '2 രാജാക്ക‌ന്‍‍മാര്‍ 2 Kings' },
                { id: 12, val: '1 ദിനവൃത്താന്തം 1 Chronicles' },
                { id: 13, val: '2 ദിനവൃത്താന്തം 2 Chronicles' },
                { id: 14, val: 'എസ്രാ Ezra' },
                { id: 15, val: 'നെഹമിയ Nehemiah' },
                { id: 16, val: 'തോബിത് Tobit' },
                { id: 17, val: 'യൂദിത്ത് Judith' },
                { id: 18, val: 'എസ്തേര്‍ Esther' },
                { id: 19, val: '1 മക്കബായര്‍ 1 Maccabees' },
                { id: 20, val: '2 മക്കബായര്‍ 2 Maccabees' },
                { id: 21, val: 'ജോബ്  Job' },
                { id: 22, val: 'സങ്കീര്‍ത്തനങ്ങള്‍ Psalms' },
                { id: 23, val: 'സുഭാഷിതങ്ങള്‍ Proverbs' },
                { id: 24, val: 'സഭാപ്രസംഗക‌ന്‍ Ecclesiastes' },
                { id: 25, val: 'ഉത്തമഗീതം Song of Songs' },
                { id: 26, val: 'ജ്ഞാനം The Book of Wisdom' },
                { id: 27, val: 'പ്രഭാഷക‌ന്‍ Sirach' },
                { id: 28, val: 'ഏശയ്യാ Isaiah' },
                { id: 29, val: 'ജെറെമിയ Jeremiah' },
                { id: 30, val: 'വിലാപങ്ങള്‍ Lamentations' },
                { id: 31, val: 'ബാറൂക്ക് Baruch' },
                { id: 32, val: 'എസെക്കിയേല്‍ Ezekiel' },
                { id: 33, val: 'ദാനിയേല്‍ Daniel' },
                { id: 34, val: 'ഹോസിയാ Hosea' },
                { id: 35, val: 'ജോയേല്‍ Joel' },
                { id: 36, val: 'ആമോസ് Amos' },
                { id: 37, val: 'ഒബാദിയ Obadiah' },
                { id: 38, val: 'യോനാ  Jonah' },
                { id: 39, val: 'മിക്കാ Micah' },
                { id: 40, val: 'നാഹും Nahum' },
                { id: 41, val: 'ഹബക്കുക്ക് Habakkuk' },
                { id: 42, val: 'സെഫാനിയ Zephaniah' },
                { id: 43, val: 'ഹഗ്ഗായി Haggai' },
                { id: 44, val: 'സഖറിയാ Zechariah' },
                { id: 45, val: 'മലാക്കി Malachi' }];
        } else if (key == OldChapters) {
            jsonArray = [{ id: 0, catid: 0, val: 1, sel: 0, pur: 0 }, { id: 1, catid: 0, val: 2, sel: 0, pur: 0 }, { id: 2, catid: 0, val: 3, sel: 0, pur: 0 }, { id: 3, catid: 0, val: 4, sel: 0, pur: 0 }, { id: 4, catid: 0, val: 5, sel: 0, pur: 0 }, { id: 5, catid: 0, val: 6, sel: 0, pur: 0 }, { id: 6, catid: 0, val: 7, sel: 0, pur: 0 }, { id: 7, catid: 0, val: 8, sel: 0, pur: 0 }, { id: 8, catid: 0, val: 9, sel: 0, pur: 0 }, { id: 9, catid: 0, val: 10, sel: 0, pur: 0 }, { id: 10, catid: 0, val: 11, sel: 0, pur: 0 }, { id: 11, catid: 0, val: 12, sel: 0, pur: 0 }, { id: 12, catid: 0, val: 13, sel: 0, pur: 0 }, { id: 13, catid: 0, val: 14, sel: 0, pur: 0 }, { id: 14, catid: 0, val: 15, sel: 0, pur: 0 }, { id: 15, catid: 0, val: 16, sel: 0, pur: 0 }, { id: 16, catid: 0, val: 17, sel: 0, pur: 0 }, { id: 17, catid: 0, val: 18, sel: 0, pur: 0 }, { id: 18, catid: 0, val: 19, sel: 0, pur: 0 }, { id: 19, catid: 0, val: 20, sel: 0, pur: 0 }, { id: 20, catid: 0, val: 21, sel: 0, pur: 0 }, { id: 21, catid: 0, val: 22, sel: 0, pur: 0 }, { id: 22, catid: 0, val: 23, sel: 0, pur: 0 }, { id: 23, catid: 0, val: 24, sel: 0, pur: 0 }, { id: 24, catid: 0, val: 25, sel: 0, pur: 0 }, { id: 25, catid: 0, val: 26, sel: 0, pur: 0 }, { id: 26, catid: 0, val: 27, sel: 0, pur: 0 }, { id: 27, catid: 0, val: 28, sel: 0, pur: 0 }, { id: 28, catid: 0, val: 29, sel: 0, pur: 0 }, { id: 29, catid: 0, val: 30, sel: 0, pur: 0 }, { id: 30, catid: 0, val: 31, sel: 0, pur: 0 }, { id: 31, catid: 0, val: 32, sel: 0, pur: 0 }, { id: 32, catid: 0, val: 33, sel: 0, pur: 0 }, { id: 33, catid: 0, val: 34, sel: 0, pur: 0 }, { id: 34, catid: 0, val: 35, sel: 0, pur: 0 }, { id: 35, catid: 0, val: 36, sel: 0, pur: 0 }, { id: 36, catid: 0, val: 37, sel: 0, pur: 0 }, { id: 37, catid: 0, val: 38, sel: 0, pur: 0 }, { id: 38, catid: 0, val: 39, sel: 0, pur: 0 }, { id: 39, catid: 0, val: 40, sel: 0, pur: 0 }, { id: 40, catid: 0, val: 41, sel: 0, pur: 0 }, { id: 41, catid: 0, val: 42, sel: 0, pur: 0 }, { id: 42, catid: 0, val: 43, sel: 0, pur: 0 }, { id: 43, catid: 0, val: 44, sel: 0, pur: 0 }, { id: 44, catid: 0, val: 45, sel: 0, pur: 0 }, { id: 45, catid: 0, val: 46, sel: 0, pur: 0 }, { id: 46, catid: 0, val: 47, sel: 0, pur: 0 }, { id: 47, catid: 0, val: 48, sel: 0, pur: 0 }, { id: 48, catid: 0, val: 49, sel: 0, pur: 0 }, { id: 49, catid: 0, val: 50, sel: 0, pur: 0 }, { id: 60, catid: 1, val: 1, sel: 0, pur: 0 }, { id: 61, catid: 1, val: 2, sel: 0, pur: 0 }, { id: 62, catid: 1, val: 3, sel: 0, pur: 0 }, { id: 63, catid: 1, val: 4, sel: 0, pur: 0 }, { id: 64, catid: 1, val: 5, sel: 0, pur: 0 }, { id: 65, catid: 1, val: 6, sel: 0, pur: 0 }, { id: 66, catid: 1, val: 7, sel: 0, pur: 0 }, { id: 67, catid: 1, val: 8, sel: 0, pur: 0 }, { id: 68, catid: 1, val: 9, sel: 0, pur: 0 }, { id: 69, catid: 1, val: 10, sel: 0, pur: 0 }, { id: 70, catid: 1, val: 11, sel: 0, pur: 0 }, { id: 71, catid: 1, val: 12, sel: 0, pur: 0 }, { id: 72, catid: 1, val: 13, sel: 0, pur: 0 }, { id: 73, catid: 1, val: 14, sel: 0, pur: 0 }, { id: 74, catid: 1, val: 15, sel: 0, pur: 0 }, { id: 75, catid: 1, val: 16, sel: 0, pur: 0 }, { id: 76, catid: 1, val: 17, sel: 0, pur: 0 }, { id: 77, catid: 1, val: 18, sel: 0, pur: 0 }, { id: 78, catid: 1, val: 19, sel: 0, pur: 0 }, { id: 79, catid: 1, val: 20, sel: 0, pur: 0 }, { id: 80, catid: 1, val: 21, sel: 0, pur: 0 }, { id: 81, catid: 1, val: 22, sel: 0, pur: 0 }, { id: 82, catid: 1, val: 23, sel: 0, pur: 0 }, { id: 83, catid: 1, val: 24, sel: 0, pur: 0 }, { id: 84, catid: 1, val: 25, sel: 0, pur: 0 }, { id: 85, catid: 1, val: 26, sel: 0, pur: 0 }, { id: 86, catid: 1, val: 27, sel: 0, pur: 0 }, { id: 87, catid: 1, val: 28, sel: 0, pur: 0 }, { id: 88, catid: 1, val: 29, sel: 0, pur: 0 }, { id: 89, catid: 1, val: 30, sel: 0, pur: 0 }, { id: 90, catid: 1, val: 31, sel: 0, pur: 0 }, { id: 91, catid: 1, val: 32, sel: 0, pur: 0 }, { id: 92, catid: 1, val: 33, sel: 0, pur: 0 }, { id: 93, catid: 1, val: 34, sel: 0, pur: 0 }, { id: 94, catid: 1, val: 35, sel: 0, pur: 0 }, { id: 95, catid: 1, val: 36, sel: 0, pur: 0 }, { id: 96, catid: 1, val: 37, sel: 0, pur: 0 }, { id: 97, catid: 1, val: 38, sel: 0, pur: 0 }, { id: 98, catid: 1, val: 39, sel: 0, pur: 0 }, { id: 99, catid: 1, val: 40, sel: 0, pur: 0 }, { id: 110, catid: 2, val: 1, sel: 0, pur: 0 }, { id: 111, catid: 2, val: 2, sel: 0, pur: 0 }, { id: 112, catid: 2, val: 3, sel: 0, pur: 0 }, { id: 113, catid: 2, val: 4, sel: 0, pur: 0 }, { id: 114, catid: 2, val: 5, sel: 0, pur: 0 }, { id: 115, catid: 2, val: 6, sel: 0, pur: 0 }, { id: 116, catid: 2, val: 7, sel: 0, pur: 0 }, { id: 117, catid: 2, val: 8, sel: 0, pur: 0 }, { id: 118, catid: 2, val: 9, sel: 0, pur: 0 }, { id: 119, catid: 2, val: 10, sel: 0, pur: 0 }, { id: 120, catid: 2, val: 11, sel: 0, pur: 0 }, { id: 121, catid: 2, val: 12, sel: 0, pur: 0 }, { id: 122, catid: 2, val: 13, sel: 0, pur: 0 }, { id: 123, catid: 2, val: 14, sel: 0, pur: 0 }, { id: 124, catid: 2, val: 15, sel: 0, pur: 0 }, { id: 125, catid: 2, val: 16, sel: 0, pur: 0 }, { id: 126, catid: 2, val: 17, sel: 0, pur: 0 }, { id: 127, catid: 2, val: 18, sel: 0, pur: 0 }, { id: 128, catid: 2, val: 19, sel: 0, pur: 0 }, { id: 129, catid: 2, val: 20, sel: 0, pur: 0 }, { id: 130, catid: 2, val: 21, sel: 0, pur: 0 }, { id: 131, catid: 2, val: 22, sel: 0, pur: 0 }, { id: 132, catid: 2, val: 23, sel: 0, pur: 0 }, { id: 133, catid: 2, val: 24, sel: 0, pur: 0 }, { id: 134, catid: 2, val: 25, sel: 0, pur: 0 }, { id: 135, catid: 2, val: 26, sel: 0, pur: 0 }, { id: 136, catid: 2, val: 27, sel: 0, pur: 0 }, { id: 147, catid: 3, val: 1, sel: 0, pur: 0 }, { id: 148, catid: 3, val: 2, sel: 0, pur: 0 }, { id: 149, catid: 3, val: 3, sel: 0, pur: 0 }, { id: 150, catid: 3, val: 4, sel: 0, pur: 0 }, { id: 151, catid: 3, val: 5, sel: 0, pur: 0 }, { id: 152, catid: 3, val: 6, sel: 0, pur: 0 }, { id: 153, catid: 3, val: 7, sel: 0, pur: 0 }, { id: 154, catid: 3, val: 8, sel: 0, pur: 0 }, { id: 155, catid: 3, val: 9, sel: 0, pur: 0 }, { id: 156, catid: 3, val: 10, sel: 0, pur: 0 }, { id: 157, catid: 3, val: 11, sel: 0, pur: 0 }, { id: 158, catid: 3, val: 12, sel: 0, pur: 0 }, { id: 159, catid: 3, val: 13, sel: 0, pur: 0 }, { id: 160, catid: 3, val: 14, sel: 0, pur: 0 }, { id: 161, catid: 3, val: 15, sel: 0, pur: 0 }, { id: 162, catid: 3, val: 16, sel: 0, pur: 0 }, { id: 163, catid: 3, val: 17, sel: 0, pur: 0 }, { id: 164, catid: 3, val: 18, sel: 0, pur: 0 }, { id: 165, catid: 3, val: 19, sel: 0, pur: 0 }, { id: 166, catid: 3, val: 20, sel: 0, pur: 0 }, { id: 167, catid: 3, val: 21, sel: 0, pur: 0 }, { id: 168, catid: 3, val: 22, sel: 0, pur: 0 }, { id: 169, catid: 3, val: 23, sel: 0, pur: 0 }, { id: 170, catid: 3, val: 24, sel: 0, pur: 0 }, { id: 171, catid: 3, val: 25, sel: 0, pur: 0 }, { id: 172, catid: 3, val: 26, sel: 0, pur: 0 }, { id: 173, catid: 3, val: 27, sel: 0, pur: 0 }, { id: 174, catid: 3, val: 28, sel: 0, pur: 0 }, { id: 175, catid: 3, val: 29, sel: 0, pur: 0 }, { id: 176, catid: 3, val: 30, sel: 0, pur: 0 }, { id: 177, catid: 3, val: 31, sel: 0, pur: 0 }, { id: 178, catid: 3, val: 32, sel: 0, pur: 0 }, { id: 179, catid: 3, val: 33, sel: 0, pur: 0 }, { id: 180, catid: 3, val: 34, sel: 0, pur: 0 }, { id: 181, catid: 3, val: 35, sel: 0, pur: 0 }, { id: 182, catid: 3, val: 36, sel: 0, pur: 0 }, { id: 193, catid: 4, val: 1, sel: 0, pur: 0 }, { id: 194, catid: 4, val: 2, sel: 0, pur: 0 }, { id: 195, catid: 4, val: 3, sel: 0, pur: 0 }, { id: 196, catid: 4, val: 4, sel: 0, pur: 0 }, { id: 197, catid: 4, val: 5, sel: 0, pur: 0 }, { id: 198, catid: 4, val: 6, sel: 0, pur: 0 }, { id: 199, catid: 4, val: 7, sel: 0, pur: 0 }, { id: 200, catid: 4, val: 8, sel: 0, pur: 0 }, { id: 201, catid: 4, val: 9, sel: 0, pur: 0 }, { id: 202, catid: 4, val: 10, sel: 0, pur: 0 }, { id: 203, catid: 4, val: 11, sel: 0, pur: 0 }, { id: 204, catid: 4, val: 12, sel: 0, pur: 0 }, { id: 205, catid: 4, val: 13, sel: 0, pur: 0 }, { id: 206, catid: 4, val: 14, sel: 0, pur: 0 }, { id: 207, catid: 4, val: 15, sel: 0, pur: 0 }, { id: 208, catid: 4, val: 16, sel: 0, pur: 0 }, { id: 209, catid: 4, val: 17, sel: 0, pur: 0 }, { id: 210, catid: 4, val: 18, sel: 0, pur: 0 }, { id: 211, catid: 4, val: 19, sel: 0, pur: 0 }, { id: 212, catid: 4, val: 20, sel: 0, pur: 0 }, { id: 213, catid: 4, val: 21, sel: 0, pur: 0 }, { id: 214, catid: 4, val: 22, sel: 0, pur: 0 }, { id: 215, catid: 4, val: 23, sel: 0, pur: 0 }, { id: 216, catid: 4, val: 24, sel: 0, pur: 0 }, { id: 217, catid: 4, val: 25, sel: 0, pur: 0 }, { id: 218, catid: 4, val: 26, sel: 0, pur: 0 }, { id: 219, catid: 4, val: 27, sel: 0, pur: 0 }, { id: 220, catid: 4, val: 28, sel: 0, pur: 0 }, { id: 221, catid: 4, val: 29, sel: 0, pur: 0 }, { id: 222, catid: 4, val: 30, sel: 0, pur: 0 }, { id: 223, catid: 4, val: 31, sel: 0, pur: 0 }, { id: 224, catid: 4, val: 32, sel: 0, pur: 0 }, { id: 225, catid: 4, val: 33, sel: 0, pur: 0 }, { id: 226, catid: 4, val: 34, sel: 0, pur: 0 }, { id: 237, catid: 5, val: 1, sel: 0, pur: 0 }, { id: 238, catid: 5, val: 2, sel: 0, pur: 0 }, { id: 239, catid: 5, val: 3, sel: 0, pur: 0 }, { id: 240, catid: 5, val: 4, sel: 0, pur: 0 }, { id: 241, catid: 5, val: 5, sel: 0, pur: 0 }, { id: 242, catid: 5, val: 6, sel: 0, pur: 0 }, { id: 243, catid: 5, val: 7, sel: 0, pur: 0 }, { id: 244, catid: 5, val: 8, sel: 0, pur: 0 }, { id: 245, catid: 5, val: 9, sel: 0, pur: 0 }, { id: 246, catid: 5, val: 10, sel: 0, pur: 0 }, { id: 247, catid: 5, val: 11, sel: 0, pur: 0 }, { id: 248, catid: 5, val: 12, sel: 0, pur: 0 }, { id: 249, catid: 5, val: 13, sel: 0, pur: 0 }, { id: 250, catid: 5, val: 14, sel: 0, pur: 0 }, { id: 251, catid: 5, val: 15, sel: 0, pur: 0 }, { id: 252, catid: 5, val: 16, sel: 0, pur: 0 }, { id: 253, catid: 5, val: 17, sel: 0, pur: 0 }, { id: 254, catid: 5, val: 18, sel: 0, pur: 0 }, { id: 255, catid: 5, val: 19, sel: 0, pur: 0 }, { id: 256, catid: 5, val: 20, sel: 0, pur: 0 }, { id: 257, catid: 5, val: 21, sel: 0, pur: 0 }, { id: 258, catid: 5, val: 22, sel: 0, pur: 0 }, { id: 259, catid: 5, val: 23, sel: 0, pur: 0 }, { id: 260, catid: 5, val: 24, sel: 0, pur: 0 }, { id: 271, catid: 6, val: 1, sel: 0, pur: 0 }, { id: 272, catid: 6, val: 2, sel: 0, pur: 0 }, { id: 273, catid: 6, val: 3, sel: 0, pur: 0 }, { id: 274, catid: 6, val: 4, sel: 0, pur: 0 }, { id: 275, catid: 6, val: 5, sel: 0, pur: 0 }, { id: 276, catid: 6, val: 6, sel: 0, pur: 0 }, { id: 277, catid: 6, val: 7, sel: 0, pur: 0 }, { id: 278, catid: 6, val: 8, sel: 0, pur: 0 }, { id: 279, catid: 6, val: 9, sel: 0, pur: 0 }, { id: 280, catid: 6, val: 10, sel: 0, pur: 0 }, { id: 281, catid: 6, val: 11, sel: 0, pur: 0 }, { id: 282, catid: 6, val: 12, sel: 0, pur: 0 }, { id: 283, catid: 6, val: 13, sel: 0, pur: 0 }, { id: 284, catid: 6, val: 14, sel: 0, pur: 0 }, { id: 285, catid: 6, val: 15, sel: 0, pur: 0 }, { id: 286, catid: 6, val: 16, sel: 0, pur: 0 }, { id: 287, catid: 6, val: 17, sel: 0, pur: 0 }, { id: 288, catid: 6, val: 18, sel: 0, pur: 0 }, { id: 289, catid: 6, val: 19, sel: 0, pur: 0 }, { id: 290, catid: 6, val: 20, sel: 0, pur: 0 }, { id: 291, catid: 6, val: 21, sel: 0, pur: 0 }, { id: 302, catid: 7, val: 1, sel: 0, pur: 0 }, { id: 303, catid: 7, val: 2, sel: 0, pur: 0 }, { id: 304, catid: 7, val: 3, sel: 0, pur: 0 }, { id: 305, catid: 7, val: 4, sel: 0, pur: 0 }, { id: 316, catid: 8, val: 1, sel: 0, pur: 0 }, { id: 317, catid: 8, val: 2, sel: 0, pur: 0 }, { id: 318, catid: 8, val: 3, sel: 0, pur: 0 }, { id: 319, catid: 8, val: 4, sel: 0, pur: 0 }, { id: 320, catid: 8, val: 5, sel: 0, pur: 0 }, { id: 321, catid: 8, val: 6, sel: 0, pur: 0 }, { id: 322, catid: 8, val: 7, sel: 0, pur: 0 }, { id: 323, catid: 8, val: 8, sel: 0, pur: 0 }, { id: 324, catid: 8, val: 9, sel: 0, pur: 0 }, { id: 325, catid: 8, val: 10, sel: 0, pur: 0 }, { id: 326, catid: 8, val: 11, sel: 0, pur: 0 }, { id: 327, catid: 8, val: 12, sel: 0, pur: 0 }, { id: 328, catid: 8, val: 13, sel: 0, pur: 0 }, { id: 329, catid: 8, val: 14, sel: 0, pur: 0 }, { id: 330, catid: 8, val: 15, sel: 0, pur: 0 }, { id: 331, catid: 8, val: 16, sel: 0, pur: 0 }, { id: 332, catid: 8, val: 17, sel: 0, pur: 0 }, { id: 333, catid: 8, val: 18, sel: 0, pur: 0 }, { id: 334, catid: 8, val: 19, sel: 0, pur: 0 }, { id: 335, catid: 8, val: 20, sel: 0, pur: 0 }, { id: 336, catid: 8, val: 21, sel: 0, pur: 0 }, { id: 337, catid: 8, val: 22, sel: 0, pur: 0 }, { id: 338, catid: 8, val: 23, sel: 0, pur: 0 }, { id: 339, catid: 8, val: 24, sel: 0, pur: 0 }, { id: 340, catid: 8, val: 25, sel: 0, pur: 0 }, { id: 341, catid: 8, val: 26, sel: 0, pur: 0 }, { id: 342, catid: 8, val: 27, sel: 0, pur: 0 }, { id: 343, catid: 8, val: 28, sel: 0, pur: 0 }, { id: 344, catid: 8, val: 29, sel: 0, pur: 0 }, { id: 345, catid: 8, val: 30, sel: 0, pur: 0 }, { id: 346, catid: 8, val: 31, sel: 0, pur: 0 }, { id: 357, catid: 9, val: 1, sel: 0, pur: 0 }, { id: 358, catid: 9, val: 2, sel: 0, pur: 0 }, { id: 359, catid: 9, val: 3, sel: 0, pur: 0 }, { id: 360, catid: 9, val: 4, sel: 0, pur: 0 }, { id: 361, catid: 9, val: 5, sel: 0, pur: 0 }, { id: 362, catid: 9, val: 6, sel: 0, pur: 0 }, { id: 363, catid: 9, val: 7, sel: 0, pur: 0 }, { id: 364, catid: 9, val: 8, sel: 0, pur: 0 }, { id: 365, catid: 9, val: 9, sel: 0, pur: 0 }, { id: 366, catid: 9, val: 10, sel: 0, pur: 0 }, { id: 367, catid: 9, val: 11, sel: 0, pur: 0 }, { id: 368, catid: 9, val: 12, sel: 0, pur: 0 }, { id: 369, catid: 9, val: 13, sel: 0, pur: 0 }, { id: 370, catid: 9, val: 14, sel: 0, pur: 0 }, { id: 371, catid: 9, val: 15, sel: 0, pur: 0 }, { id: 372, catid: 9, val: 16, sel: 0, pur: 0 }, { id: 373, catid: 9, val: 17, sel: 0, pur: 0 }, { id: 374, catid: 9, val: 18, sel: 0, pur: 0 }, { id: 375, catid: 9, val: 19, sel: 0, pur: 0 }, { id: 376, catid: 9, val: 20, sel: 0, pur: 0 }, { id: 377, catid: 9, val: 21, sel: 0, pur: 0 }, { id: 378, catid: 9, val: 22, sel: 0, pur: 0 }, { id: 379, catid: 9, val: 23, sel: 0, pur: 0 }, { id: 380, catid: 9, val: 24, sel: 0, pur: 0 }, { id: 391, catid: 10, val: 1, sel: 0, pur: 0 }, { id: 392, catid: 10, val: 2, sel: 0, pur: 0 }, { id: 393, catid: 10, val: 3, sel: 0, pur: 0 }, { id: 394, catid: 10, val: 4, sel: 0, pur: 0 }, { id: 395, catid: 10, val: 5, sel: 0, pur: 0 }, { id: 396, catid: 10, val: 6, sel: 0, pur: 0 }, { id: 397, catid: 10, val: 7, sel: 0, pur: 0 }, { id: 398, catid: 10, val: 8, sel: 0, pur: 0 }, { id: 399, catid: 10, val: 9, sel: 0, pur: 0 }, { id: 400, catid: 10, val: 10, sel: 0, pur: 0 }, { id: 401, catid: 10, val: 11, sel: 0, pur: 0 }, { id: 402, catid: 10, val: 12, sel: 0, pur: 0 }, { id: 403, catid: 10, val: 13, sel: 0, pur: 0 }, { id: 404, catid: 10, val: 14, sel: 0, pur: 0 }, { id: 405, catid: 10, val: 15, sel: 0, pur: 0 }, { id: 406, catid: 10, val: 16, sel: 0, pur: 0 }, { id: 407, catid: 10, val: 17, sel: 0, pur: 0 }, { id: 408, catid: 10, val: 18, sel: 0, pur: 0 }, { id: 409, catid: 10, val: 19, sel: 0, pur: 0 }, { id: 410, catid: 10, val: 20, sel: 0, pur: 0 }, { id: 411, catid: 10, val: 21, sel: 0, pur: 0 }, { id: 412, catid: 10, val: 22, sel: 0, pur: 0 }, { id: 423, catid: 11, val: 1, sel: 0, pur: 0 }, { id: 424, catid: 11, val: 2, sel: 0, pur: 0 }, { id: 425, catid: 11, val: 3, sel: 0, pur: 0 }, { id: 426, catid: 11, val: 4, sel: 0, pur: 0 }, { id: 427, catid: 11, val: 5, sel: 0, pur: 0 }, { id: 428, catid: 11, val: 6, sel: 0, pur: 0 }, { id: 429, catid: 11, val: 7, sel: 0, pur: 0 }, { id: 430, catid: 11, val: 8, sel: 0, pur: 0 }, { id: 431, catid: 11, val: 9, sel: 0, pur: 0 }, { id: 432, catid: 11, val: 10, sel: 0, pur: 0 }, { id: 433, catid: 11, val: 11, sel: 0, pur: 0 }, { id: 434, catid: 11, val: 12, sel: 0, pur: 0 }, { id: 435, catid: 11, val: 13, sel: 0, pur: 0 }, { id: 436, catid: 11, val: 14, sel: 0, pur: 0 }, { id: 437, catid: 11, val: 15, sel: 0, pur: 0 }, { id: 438, catid: 11, val: 16, sel: 0, pur: 0 }, { id: 439, catid: 11, val: 17, sel: 0, pur: 0 }, { id: 440, catid: 11, val: 18, sel: 0, pur: 0 }, { id: 441, catid: 11, val: 19, sel: 0, pur: 0 }, { id: 442, catid: 11, val: 20, sel: 0, pur: 0 }, { id: 443, catid: 11, val: 21, sel: 0, pur: 0 }, { id: 444, catid: 11, val: 22, sel: 0, pur: 0 }, { id: 445, catid: 11, val: 23, sel: 0, pur: 0 }, { id: 446, catid: 11, val: 24, sel: 0, pur: 0 }, { id: 447, catid: 11, val: 25, sel: 0, pur: 0 }, { id: 458, catid: 12, val: 1, sel: 0, pur: 0 }, { id: 459, catid: 12, val: 2, sel: 0, pur: 0 }, { id: 460, catid: 12, val: 3, sel: 0, pur: 0 }, { id: 461, catid: 12, val: 4, sel: 0, pur: 0 }, { id: 462, catid: 12, val: 5, sel: 0, pur: 0 }, { id: 463, catid: 12, val: 6, sel: 0, pur: 0 }, { id: 464, catid: 12, val: 7, sel: 0, pur: 0 }, { id: 465, catid: 12, val: 8, sel: 0, pur: 0 }, { id: 466, catid: 12, val: 9, sel: 0, pur: 0 }, { id: 467, catid: 12, val: 10, sel: 0, pur: 0 }, { id: 468, catid: 12, val: 11, sel: 0, pur: 0 }, { id: 469, catid: 12, val: 12, sel: 0, pur: 0 }, { id: 470, catid: 12, val: 13, sel: 0, pur: 0 }, { id: 471, catid: 12, val: 14, sel: 0, pur: 0 }, { id: 472, catid: 12, val: 15, sel: 0, pur: 0 }, { id: 473, catid: 12, val: 16, sel: 0, pur: 0 }, { id: 474, catid: 12, val: 17, sel: 0, pur: 0 }, { id: 475, catid: 12, val: 18, sel: 0, pur: 0 }, { id: 476, catid: 12, val: 19, sel: 0, pur: 0 }, { id: 477, catid: 12, val: 20, sel: 0, pur: 0 }, { id: 478, catid: 12, val: 21, sel: 0, pur: 0 }, { id: 479, catid: 12, val: 22, sel: 0, pur: 0 }, { id: 480, catid: 12, val: 23, sel: 0, pur: 0 }, { id: 481, catid: 12, val: 24, sel: 0, pur: 0 }, { id: 482, catid: 12, val: 25, sel: 0, pur: 0 }, { id: 483, catid: 12, val: 26, sel: 0, pur: 0 }, { id: 484, catid: 12, val: 27, sel: 0, pur: 0 }, { id: 485, catid: 12, val: 28, sel: 0, pur: 0 }, { id: 486, catid: 12, val: 29, sel: 0, pur: 0 }, { id: 497, catid: 13, val: 1, sel: 0, pur: 0 }, { id: 498, catid: 13, val: 2, sel: 0, pur: 0 }, { id: 499, catid: 13, val: 3, sel: 0, pur: 0 }, { id: 500, catid: 13, val: 4, sel: 0, pur: 0 }, { id: 501, catid: 13, val: 5, sel: 0, pur: 0 }, { id: 502, catid: 13, val: 6, sel: 0, pur: 0 }, { id: 503, catid: 13, val: 7, sel: 0, pur: 0 }, { id: 504, catid: 13, val: 8, sel: 0, pur: 0 }, { id: 505, catid: 13, val: 9, sel: 0, pur: 0 }, { id: 506, catid: 13, val: 10, sel: 0, pur: 0 }, { id: 507, catid: 13, val: 11, sel: 0, pur: 0 }, { id: 508, catid: 13, val: 12, sel: 0, pur: 0 }, { id: 509, catid: 13, val: 13, sel: 0, pur: 0 }, { id: 510, catid: 13, val: 14, sel: 0, pur: 0 }, { id: 511, catid: 13, val: 15, sel: 0, pur: 0 }, { id: 512, catid: 13, val: 16, sel: 0, pur: 0 }, { id: 513, catid: 13, val: 17, sel: 0, pur: 0 }, { id: 514, catid: 13, val: 18, sel: 0, pur: 0 }, { id: 515, catid: 13, val: 19, sel: 0, pur: 0 }, { id: 516, catid: 13, val: 20, sel: 0, pur: 0 }, { id: 517, catid: 13, val: 21, sel: 0, pur: 0 }, { id: 518, catid: 13, val: 22, sel: 0, pur: 0 }, { id: 519, catid: 13, val: 23, sel: 0, pur: 0 }, { id: 520, catid: 13, val: 24, sel: 0, pur: 0 }, { id: 521, catid: 13, val: 25, sel: 0, pur: 0 }, { id: 522, catid: 13, val: 26, sel: 0, pur: 0 }, { id: 523, catid: 13, val: 27, sel: 0, pur: 0 }, { id: 524, catid: 13, val: 28, sel: 0, pur: 0 }, { id: 525, catid: 13, val: 29, sel: 0, pur: 0 }, { id: 526, catid: 13, val: 30, sel: 0, pur: 0 }, { id: 527, catid: 13, val: 31, sel: 0, pur: 0 }, { id: 528, catid: 13, val: 32, sel: 0, pur: 0 }, { id: 529, catid: 13, val: 33, sel: 0, pur: 0 }, { id: 530, catid: 13, val: 34, sel: 0, pur: 0 }, { id: 531, catid: 13, val: 35, sel: 0, pur: 0 }, { id: 532, catid: 13, val: 36, sel: 0, pur: 0 }, { id: 543, catid: 14, val: 1, sel: 0, pur: 0 }, { id: 544, catid: 14, val: 2, sel: 0, pur: 0 }, { id: 545, catid: 14, val: 3, sel: 0, pur: 0 }, { id: 546, catid: 14, val: 4, sel: 0, pur: 0 }, { id: 547, catid: 14, val: 5, sel: 0, pur: 0 }, { id: 548, catid: 14, val: 6, sel: 0, pur: 0 }, { id: 549, catid: 14, val: 7, sel: 0, pur: 0 }, { id: 550, catid: 14, val: 8, sel: 0, pur: 0 }, { id: 551, catid: 14, val: 9, sel: 0, pur: 0 }, { id: 552, catid: 14, val: 10, sel: 0, pur: 0 }, { id: 563, catid: 15, val: 1, sel: 0, pur: 0 }, { id: 564, catid: 15, val: 2, sel: 0, pur: 0 }, { id: 565, catid: 15, val: 3, sel: 0, pur: 0 }, { id: 566, catid: 15, val: 4, sel: 0, pur: 0 }, { id: 567, catid: 15, val: 5, sel: 0, pur: 0 }, { id: 568, catid: 15, val: 6, sel: 0, pur: 0 }, { id: 569, catid: 15, val: 7, sel: 0, pur: 0 }, { id: 570, catid: 15, val: 8, sel: 0, pur: 0 }, { id: 571, catid: 15, val: 9, sel: 0, pur: 0 }, { id: 572, catid: 15, val: 10, sel: 0, pur: 0 }, { id: 573, catid: 15, val: 11, sel: 0, pur: 0 }, { id: 574, catid: 15, val: 12, sel: 0, pur: 0 }, { id: 575, catid: 15, val: 13, sel: 0, pur: 0 }, { id: 586, catid: 16, val: 1, sel: 0, pur: 0 }, { id: 587, catid: 16, val: 2, sel: 0, pur: 0 }, { id: 588, catid: 16, val: 3, sel: 0, pur: 0 }, { id: 589, catid: 16, val: 4, sel: 0, pur: 0 }, { id: 590, catid: 16, val: 5, sel: 0, pur: 0 }, { id: 591, catid: 16, val: 6, sel: 0, pur: 0 }, { id: 592, catid: 16, val: 7, sel: 0, pur: 0 }, { id: 593, catid: 16, val: 8, sel: 0, pur: 0 }, { id: 594, catid: 16, val: 9, sel: 0, pur: 0 }, { id: 595, catid: 16, val: 10, sel: 0, pur: 0 }, { id: 596, catid: 16, val: 11, sel: 0, pur: 0 }, { id: 597, catid: 16, val: 12, sel: 0, pur: 0 }, { id: 598, catid: 16, val: 13, sel: 0, pur: 0 }, { id: 599, catid: 16, val: 14, sel: 0, pur: 0 }, { id: 610, catid: 17, val: 1, sel: 0, pur: 0 }, { id: 611, catid: 17, val: 2, sel: 0, pur: 0 }, { id: 612, catid: 17, val: 3, sel: 0, pur: 0 }, { id: 613, catid: 17, val: 4, sel: 0, pur: 0 }, { id: 614, catid: 17, val: 5, sel: 0, pur: 0 }, { id: 615, catid: 17, val: 6, sel: 0, pur: 0 }, { id: 616, catid: 17, val: 7, sel: 0, pur: 0 }, { id: 617, catid: 17, val: 8, sel: 0, pur: 0 }, { id: 618, catid: 17, val: 9, sel: 0, pur: 0 }, { id: 619, catid: 17, val: 10, sel: 0, pur: 0 }, { id: 620, catid: 17, val: 11, sel: 0, pur: 0 }, { id: 621, catid: 17, val: 12, sel: 0, pur: 0 }, { id: 622, catid: 17, val: 13, sel: 0, pur: 0 }, { id: 623, catid: 17, val: 14, sel: 0, pur: 0 }, { id: 624, catid: 17, val: 15, sel: 0, pur: 0 }, { id: 625, catid: 17, val: 16, sel: 0, pur: 0 }, 
            { id: 647, catid: 18, val: 11, sel: 0, pur: 0 }, 
            { id: 648, catid: 18, val: 12, sel: 0, pur: 0 }, 
            { id: 636, catid: 18, val: 1, sel: 0, pur: 0 }, 
            { id: 637, catid: 18, val: 2, sel: 0, pur: 0 }, 
            { id: 638, catid: 18, val: 3, sel: 0, pur: 0 },
            { id: 649, catid: 18, val: 13, sel: 0, pur: 0 },
            { id: 650, catid: 18, val: 3, sel: 0, pur: 0 }, 
            { id: 639, catid: 18, val: 4, sel: 0, pur: 0 }, 
            { id: 651, catid: 18, val: 13, sel: 0, pur: 0 }, 
            { id: 652, catid: 18, val: 14, sel: 0, pur: 0 }, 
            { id: 640, catid: 18, val: 5, sel: 0, pur: 0 }, 
            { id: 653, catid: 18, val: 15, sel: 0, pur: 0 },
            { id: 654, catid: 18, val: 5, sel: 0, pur: 0 },
            { id: 641, catid: 18, val: 6, sel: 0, pur: 0 }, 
            { id: 642, catid: 18, val: 7, sel: 0, pur: 0 }, 
            { id: 643, catid: 18, val: 8, sel: 0, pur: 0 },
            { id: 655, catid: 18, val: 16, sel: 0, pur: 0 }, 
            { id: 656, catid: 18, val: 8, sel: 0, pur: 0 },
            { id: 644, catid: 18, val: 9, sel: 0, pur: 0 }, 
            { id: 645, catid: 18, val: 10, sel: 0, pur: 0 }, 
            { id: 646, catid: 18, val: 11, sel: 0, pur: 0 }, 
            { id: 657, catid: 19, val: 1, sel: 0, pur: 0 }, { id: 658, catid: 19, val: 2, sel: 0, pur: 0 }, { id: 659, catid: 19, val: 3, sel: 0, pur: 0 }, { id: 660, catid: 19, val: 4, sel: 0, pur: 0 }, { id: 661, catid: 19, val: 5, sel: 0, pur: 0 }, { id: 662, catid: 19, val: 6, sel: 0, pur: 0 }, { id: 663, catid: 19, val: 7, sel: 0, pur: 0 }, { id: 664, catid: 19, val: 8, sel: 0, pur: 0 }, { id: 665, catid: 19, val: 9, sel: 0, pur: 0 }, { id: 666, catid: 19, val: 10, sel: 0, pur: 0 }, { id: 667, catid: 19, val: 11, sel: 0, pur: 0 }, { id: 668, catid: 19, val: 12, sel: 0, pur: 0 }, { id: 669, catid: 19, val: 13, sel: 0, pur: 0 }, { id: 670, catid: 19, val: 14, sel: 0, pur: 0 }, { id: 671, catid: 19, val: 15, sel: 0, pur: 0 }, { id: 672, catid: 19, val: 16, sel: 0, pur: 0 }, { id: 683, catid: 20, val: 1, sel: 0, pur: 0 }, { id: 684, catid: 20, val: 2, sel: 0, pur: 0 }, { id: 685, catid: 20, val: 3, sel: 0, pur: 0 }, { id: 686, catid: 20, val: 4, sel: 0, pur: 0 }, { id: 687, catid: 20, val: 5, sel: 0, pur: 0 }, { id: 688, catid: 20, val: 6, sel: 0, pur: 0 }, { id: 689, catid: 20, val: 7, sel: 0, pur: 0 }, { id: 690, catid: 20, val: 8, sel: 0, pur: 0 }, { id: 691, catid: 20, val: 9, sel: 0, pur: 0 }, { id: 692, catid: 20, val: 10, sel: 0, pur: 0 }, { id: 693, catid: 20, val: 11, sel: 0, pur: 0 }, { id: 694, catid: 20, val: 12, sel: 0, pur: 0 }, { id: 695, catid: 20, val: 13, sel: 0, pur: 0 }, { id: 696, catid: 20, val: 14, sel: 0, pur: 0 }, { id: 697, catid: 20, val: 15, sel: 0, pur: 0 }, { id: 708, catid: 21, val: 1, sel: 0, pur: 0 }, { id: 709, catid: 21, val: 2, sel: 0, pur: 0 }, { id: 710, catid: 21, val: 3, sel: 0, pur: 0 }, { id: 711, catid: 21, val: 4, sel: 0, pur: 0 }, { id: 712, catid: 21, val: 5, sel: 0, pur: 0 }, { id: 713, catid: 21, val: 6, sel: 0, pur: 0 }, { id: 714, catid: 21, val: 7, sel: 0, pur: 0 }, { id: 715, catid: 21, val: 8, sel: 0, pur: 0 }, { id: 716, catid: 21, val: 9, sel: 0, pur: 0 }, { id: 717, catid: 21, val: 10, sel: 0, pur: 0 }, { id: 718, catid: 21, val: 11, sel: 0, pur: 0 }, { id: 719, catid: 21, val: 12, sel: 0, pur: 0 }, { id: 720, catid: 21, val: 13, sel: 0, pur: 0 }, { id: 721, catid: 21, val: 14, sel: 0, pur: 0 }, { id: 722, catid: 21, val: 15, sel: 0, pur: 0 }, { id: 723, catid: 21, val: 16, sel: 0, pur: 0 }, { id: 724, catid: 21, val: 17, sel: 0, pur: 0 }, { id: 725, catid: 21, val: 18, sel: 0, pur: 0 }, { id: 726, catid: 21, val: 19, sel: 0, pur: 0 }, { id: 727, catid: 21, val: 20, sel: 0, pur: 0 }, { id: 728, catid: 21, val: 21, sel: 0, pur: 0 }, { id: 729, catid: 21, val: 22, sel: 0, pur: 0 }, { id: 730, catid: 21, val: 23, sel: 0, pur: 0 }, { id: 731, catid: 21, val: 24, sel: 0, pur: 0 }, { id: 732, catid: 21, val: 25, sel: 0, pur: 0 }, { id: 733, catid: 21, val: 26, sel: 0, pur: 0 }, { id: 734, catid: 21, val: 27, sel: 0, pur: 0 }, { id: 735, catid: 21, val: 28, sel: 0, pur: 0 }, { id: 736, catid: 21, val: 29, sel: 0, pur: 0 }, { id: 737, catid: 21, val: 30, sel: 0, pur: 0 }, { id: 738, catid: 21, val: 31, sel: 0, pur: 0 }, { id: 739, catid: 21, val: 32, sel: 0, pur: 0 }, { id: 740, catid: 21, val: 33, sel: 0, pur: 0 }, { id: 741, catid: 21, val: 34, sel: 0, pur: 0 }, { id: 742, catid: 21, val: 35, sel: 0, pur: 0 }, { id: 743, catid: 21, val: 36, sel: 0, pur: 0 }, { id: 744, catid: 21, val: 37, sel: 0, pur: 0 }, { id: 745, catid: 21, val: 38, sel: 0, pur: 0 }, { id: 746, catid: 21, val: 39, sel: 0, pur: 0 }, { id: 747, catid: 21, val: 40, sel: 0, pur: 0 }, { id: 748, catid: 21, val: 41, sel: 0, pur: 0 }, { id: 749, catid: 21, val: 42, sel: 0, pur: 0 }, { id: 760, catid: 22, val: 1, sel: 0, pur: 0 }, { id: 761, catid: 22, val: 2, sel: 0, pur: 0 }, { id: 762, catid: 22, val: 3, sel: 0, pur: 0 }, { id: 763, catid: 22, val: 4, sel: 0, pur: 0 }, { id: 764, catid: 22, val: 5, sel: 0, pur: 0 }, { id: 765, catid: 22, val: 6, sel: 0, pur: 0 }, { id: 766, catid: 22, val: 7, sel: 0, pur: 0 }, { id: 767, catid: 22, val: 8, sel: 0, pur: 0 }, { id: 768, catid: 22, val: 9, sel: 0, pur: 0 }, { id: 769, catid: 22, val: 10, sel: 0, pur: 0 }, { id: 770, catid: 22, val: 11, sel: 0, pur: 0 }, { id: 771, catid: 22, val: 12, sel: 0, pur: 0 }, { id: 772, catid: 22, val: 13, sel: 0, pur: 0 }, { id: 773, catid: 22, val: 14, sel: 0, pur: 0 }, { id: 774, catid: 22, val: 15, sel: 0, pur: 0 }, { id: 775, catid: 22, val: 16, sel: 0, pur: 0 }, { id: 776, catid: 22, val: 17, sel: 0, pur: 0 }, { id: 777, catid: 22, val: 18, sel: 0, pur: 0 }, { id: 778, catid: 22, val: 19, sel: 0, pur: 0 }, { id: 779, catid: 22, val: 20, sel: 0, pur: 0 }, { id: 780, catid: 22, val: 21, sel: 0, pur: 0 }, { id: 781, catid: 22, val: 22, sel: 0, pur: 0 }, { id: 782, catid: 22, val: 23, sel: 0, pur: 0 }, { id: 783, catid: 22, val: 24, sel: 0, pur: 0 }, { id: 784, catid: 22, val: 25, sel: 0, pur: 0 }, { id: 785, catid: 22, val: 26, sel: 0, pur: 0 }, { id: 786, catid: 22, val: 27, sel: 0, pur: 0 }, { id: 787, catid: 22, val: 28, sel: 0, pur: 0 }, { id: 788, catid: 22, val: 29, sel: 0, pur: 0 }, { id: 789, catid: 22, val: 30, sel: 0, pur: 0 }, { id: 790, catid: 22, val: 31, sel: 0, pur: 0 }, { id: 791, catid: 22, val: 32, sel: 0, pur: 0 }, { id: 792, catid: 22, val: 33, sel: 0, pur: 0 }, { id: 793, catid: 22, val: 34, sel: 0, pur: 0 }, { id: 794, catid: 22, val: 35, sel: 0, pur: 0 }, { id: 795, catid: 22, val: 36, sel: 0, pur: 0 }, { id: 796, catid: 22, val: 37, sel: 0, pur: 0 }, { id: 797, catid: 22, val: 38, sel: 0, pur: 0 }, { id: 798, catid: 22, val: 39, sel: 0, pur: 0 }, { id: 799, catid: 22, val: 40, sel: 0, pur: 0 }, { id: 800, catid: 22, val: 41, sel: 0, pur: 0 }, { id: 801, catid: 22, val: 42, sel: 0, pur: 0 }, { id: 802, catid: 22, val: 43, sel: 0, pur: 0 }, { id: 803, catid: 22, val: 44, sel: 0, pur: 0 }, { id: 804, catid: 22, val: 45, sel: 0, pur: 0 }, { id: 805, catid: 22, val: 46, sel: 0, pur: 0 }, { id: 806, catid: 22, val: 47, sel: 0, pur: 0 }, { id: 807, catid: 22, val: 48, sel: 0, pur: 0 }, { id: 808, catid: 22, val: 49, sel: 0, pur: 0 }, { id: 809, catid: 22, val: 50, sel: 0, pur: 0 }, { id: 810, catid: 22, val: 51, sel: 0, pur: 0 }, { id: 811, catid: 22, val: 52, sel: 0, pur: 0 }, { id: 812, catid: 22, val: 53, sel: 0, pur: 0 }, { id: 813, catid: 22, val: 54, sel: 0, pur: 0 }, { id: 814, catid: 22, val: 55, sel: 0, pur: 0 }, { id: 815, catid: 22, val: 56, sel: 0, pur: 0 }, { id: 816, catid: 22, val: 57, sel: 0, pur: 0 }, { id: 817, catid: 22, val: 58, sel: 0, pur: 0 }, { id: 818, catid: 22, val: 59, sel: 0, pur: 0 }, { id: 819, catid: 22, val: 60, sel: 0, pur: 0 }, { id: 820, catid: 22, val: 61, sel: 0, pur: 0 }, { id: 821, catid: 22, val: 62, sel: 0, pur: 0 }, { id: 822, catid: 22, val: 63, sel: 0, pur: 0 }, { id: 823, catid: 22, val: 64, sel: 0, pur: 0 }, { id: 824, catid: 22, val: 65, sel: 0, pur: 0 }, { id: 825, catid: 22, val: 66, sel: 0, pur: 0 }, { id: 826, catid: 22, val: 67, sel: 0, pur: 0 }, { id: 827, catid: 22, val: 68, sel: 0, pur: 0 }, { id: 828, catid: 22, val: 69, sel: 0, pur: 0 }, { id: 829, catid: 22, val: 70, sel: 0, pur: 0 }, { id: 830, catid: 22, val: 71, sel: 0, pur: 0 }, { id: 831, catid: 22, val: 72, sel: 0, pur: 0 }, { id: 832, catid: 22, val: 73, sel: 0, pur: 0 }, { id: 833, catid: 22, val: 74, sel: 0, pur: 0 }, { id: 834, catid: 22, val: 75, sel: 0, pur: 0 }, { id: 835, catid: 22, val: 76, sel: 0, pur: 0 }, { id: 836, catid: 22, val: 77, sel: 0, pur: 0 }, { id: 837, catid: 22, val: 78, sel: 0, pur: 0 }, { id: 838, catid: 22, val: 79, sel: 0, pur: 0 }, { id: 839, catid: 22, val: 80, sel: 0, pur: 0 }, { id: 840, catid: 22, val: 81, sel: 0, pur: 0 }, { id: 841, catid: 22, val: 82, sel: 0, pur: 0 }, { id: 842, catid: 22, val: 83, sel: 0, pur: 0 }, { id: 843, catid: 22, val: 84, sel: 0, pur: 0 }, { id: 844, catid: 22, val: 85, sel: 0, pur: 0 }, { id: 845, catid: 22, val: 86, sel: 0, pur: 0 }, { id: 846, catid: 22, val: 87, sel: 0, pur: 0 }, { id: 847, catid: 22, val: 88, sel: 0, pur: 0 }, { id: 848, catid: 22, val: 89, sel: 0, pur: 0 }, { id: 849, catid: 22, val: 90, sel: 0, pur: 0 }, { id: 850, catid: 22, val: 91, sel: 0, pur: 0 }, { id: 851, catid: 22, val: 92, sel: 0, pur: 0 }, { id: 852, catid: 22, val: 93, sel: 0, pur: 0 }, { id: 853, catid: 22, val: 94, sel: 0, pur: 0 }, { id: 854, catid: 22, val: 95, sel: 0, pur: 0 }, { id: 855, catid: 22, val: 96, sel: 0, pur: 0 }, { id: 856, catid: 22, val: 97, sel: 0, pur: 0 }, { id: 857, catid: 22, val: 98, sel: 0, pur: 0 }, { id: 858, catid: 22, val: 99, sel: 0, pur: 0 }, { id: 859, catid: 22, val: 100, sel: 0, pur: 0 }, { id: 860, catid: 22, val: 101, sel: 0, pur: 0 }, { id: 861, catid: 22, val: 102, sel: 0, pur: 0 }, { id: 862, catid: 22, val: 103, sel: 0, pur: 0 }, { id: 863, catid: 22, val: 104, sel: 0, pur: 0 }, { id: 864, catid: 22, val: 105, sel: 0, pur: 0 }, { id: 865, catid: 22, val: 106, sel: 0, pur: 0 }, { id: 866, catid: 22, val: 107, sel: 0, pur: 0 }, { id: 867, catid: 22, val: 108, sel: 0, pur: 0 }, { id: 868, catid: 22, val: 109, sel: 0, pur: 0 }, { id: 869, catid: 22, val: 110, sel: 0, pur: 0 }, { id: 870, catid: 22, val: 111, sel: 0, pur: 0 }, { id: 871, catid: 22, val: 112, sel: 0, pur: 0 }, { id: 872, catid: 22, val: 113, sel: 0, pur: 0 }, { id: 873, catid: 22, val: 114, sel: 0, pur: 0 }, { id: 874, catid: 22, val: 115, sel: 0, pur: 0 }, { id: 875, catid: 22, val: 116, sel: 0, pur: 0 }, { id: 876, catid: 22, val: 117, sel: 0, pur: 0 }, { id: 877, catid: 22, val: 118, sel: 0, pur: 0 }, { id: 878, catid: 22, val: 119, sel: 0, pur: 0 }, { id: 879, catid: 22, val: 120, sel: 0, pur: 0 }, { id: 880, catid: 22, val: 121, sel: 0, pur: 0 }, { id: 881, catid: 22, val: 122, sel: 0, pur: 0 }, { id: 882, catid: 22, val: 123, sel: 0, pur: 0 }, { id: 883, catid: 22, val: 124, sel: 0, pur: 0 }, { id: 884, catid: 22, val: 125, sel: 0, pur: 0 }, { id: 885, catid: 22, val: 126, sel: 0, pur: 0 }, { id: 886, catid: 22, val: 127, sel: 0, pur: 0 }, { id: 887, catid: 22, val: 128, sel: 0, pur: 0 }, { id: 888, catid: 22, val: 129, sel: 0, pur: 0 }, { id: 889, catid: 22, val: 130, sel: 0, pur: 0 }, { id: 890, catid: 22, val: 131, sel: 0, pur: 0 }, { id: 891, catid: 22, val: 132, sel: 0, pur: 0 }, { id: 892, catid: 22, val: 133, sel: 0, pur: 0 }, { id: 893, catid: 22, val: 134, sel: 0, pur: 0 }, { id: 894, catid: 22, val: 135, sel: 0, pur: 0 }, { id: 895, catid: 22, val: 136, sel: 0, pur: 0 }, { id: 896, catid: 22, val: 137, sel: 0, pur: 0 }, { id: 897, catid: 22, val: 138, sel: 0, pur: 0 }, { id: 898, catid: 22, val: 139, sel: 0, pur: 0 }, { id: 899, catid: 22, val: 140, sel: 0, pur: 0 }, { id: 900, catid: 22, val: 141, sel: 0, pur: 0 }, { id: 901, catid: 22, val: 142, sel: 0, pur: 0 }, { id: 902, catid: 22, val: 143, sel: 0, pur: 0 }, { id: 903, catid: 22, val: 144, sel: 0, pur: 0 }, { id: 904, catid: 22, val: 145, sel: 0, pur: 0 }, { id: 905, catid: 22, val: 146, sel: 0, pur: 0 }, { id: 906, catid: 22, val: 147, sel: 0, pur: 0 }, { id: 907, catid: 22, val: 148, sel: 0, pur: 0 }, { id: 908, catid: 22, val: 149, sel: 0, pur: 0 }, { id: 909, catid: 22, val: 150, sel: 0, pur: 0 }, { id: 920, catid: 23, val: 1, sel: 0, pur: 0 }, { id: 921, catid: 23, val: 2, sel: 0, pur: 0 }, { id: 922, catid: 23, val: 3, sel: 0, pur: 0 }, { id: 923, catid: 23, val: 4, sel: 0, pur: 0 }, { id: 924, catid: 23, val: 5, sel: 0, pur: 0 }, { id: 925, catid: 23, val: 6, sel: 0, pur: 0 }, { id: 926, catid: 23, val: 7, sel: 0, pur: 0 }, { id: 927, catid: 23, val: 8, sel: 0, pur: 0 }, { id: 928, catid: 23, val: 9, sel: 0, pur: 0 }, { id: 929, catid: 23, val: 10, sel: 0, pur: 0 }, { id: 930, catid: 23, val: 11, sel: 0, pur: 0 }, { id: 931, catid: 23, val: 12, sel: 0, pur: 0 }, { id: 932, catid: 23, val: 13, sel: 0, pur: 0 }, { id: 933, catid: 23, val: 14, sel: 0, pur: 0 }, { id: 934, catid: 23, val: 15, sel: 0, pur: 0 }, { id: 935, catid: 23, val: 16, sel: 0, pur: 0 }, { id: 936, catid: 23, val: 17, sel: 0, pur: 0 }, { id: 937, catid: 23, val: 18, sel: 0, pur: 0 }, { id: 938, catid: 23, val: 19, sel: 0, pur: 0 }, { id: 939, catid: 23, val: 20, sel: 0, pur: 0 }, { id: 940, catid: 23, val: 21, sel: 0, pur: 0 }, { id: 941, catid: 23, val: 22, sel: 0, pur: 0 }, { id: 942, catid: 23, val: 23, sel: 0, pur: 0 }, { id: 943, catid: 23, val: 24, sel: 0, pur: 0 }, { id: 944, catid: 23, val: 25, sel: 0, pur: 0 }, { id: 945, catid: 23, val: 26, sel: 0, pur: 0 }, { id: 946, catid: 23, val: 27, sel: 0, pur: 0 }, { id: 947, catid: 23, val: 28, sel: 0, pur: 0 }, { id: 948, catid: 23, val: 29, sel: 0, pur: 0 }, { id: 949, catid: 23, val: 30, sel: 0, pur: 0 }, { id: 950, catid: 23, val: 31, sel: 0, pur: 0 }, { id: 961, catid: 24, val: 1, sel: 0, pur: 0 }, { id: 962, catid: 24, val: 2, sel: 0, pur: 0 }, { id: 963, catid: 24, val: 3, sel: 0, pur: 0 }, { id: 964, catid: 24, val: 4, sel: 0, pur: 0 }, { id: 965, catid: 24, val: 5, sel: 0, pur: 0 }, { id: 966, catid: 24, val: 6, sel: 0, pur: 0 }, { id: 967, catid: 24, val: 7, sel: 0, pur: 0 }, { id: 968, catid: 24, val: 8, sel: 0, pur: 0 }, { id: 969, catid: 24, val: 9, sel: 0, pur: 0 }, { id: 970, catid: 24, val: 10, sel: 0, pur: 0 }, { id: 971, catid: 24, val: 11, sel: 0, pur: 0 }, { id: 972, catid: 24, val: 12, sel: 0, pur: 0 }, { id: 983, catid: 25, val: 1, sel: 0, pur: 0 }, { id: 984, catid: 25, val: 2, sel: 0, pur: 0 }, { id: 985, catid: 25, val: 3, sel: 0, pur: 0 }, { id: 986, catid: 25, val: 4, sel: 0, pur: 0 }, { id: 987, catid: 25, val: 5, sel: 0, pur: 0 }, { id: 988, catid: 25, val: 6, sel: 0, pur: 0 }, { id: 989, catid: 25, val: 7, sel: 0, pur: 0 }, { id: 990, catid: 25, val: 8, sel: 0, pur: 0 }, { id: 1001, catid: 26, val: 1, sel: 0, pur: 0 }, { id: 1002, catid: 26, val: 2, sel: 0, pur: 0 }, { id: 1003, catid: 26, val: 3, sel: 0, pur: 0 }, { id: 1004, catid: 26, val: 4, sel: 0, pur: 0 }, { id: 1005, catid: 26, val: 5, sel: 0, pur: 0 }, { id: 1006, catid: 26, val: 6, sel: 0, pur: 0 }, { id: 1007, catid: 26, val: 7, sel: 0, pur: 0 }, { id: 1008, catid: 26, val: 8, sel: 0, pur: 0 }, { id: 1009, catid: 26, val: 9, sel: 0, pur: 0 }, { id: 1010, catid: 26, val: 10, sel: 0, pur: 0 }, { id: 1011, catid: 26, val: 11, sel: 0, pur: 0 }, { id: 1012, catid: 26, val: 12, sel: 0, pur: 0 }, { id: 1013, catid: 26, val: 13, sel: 0, pur: 0 }, { id: 1014, catid: 26, val: 14, sel: 0, pur: 0 }, { id: 1015, catid: 26, val: 15, sel: 0, pur: 0 }, { id: 1016, catid: 26, val: 16, sel: 0, pur: 0 }, { id: 1017, catid: 26, val: 17, sel: 0, pur: 0 }, { id: 1018, catid: 26, val: 18, sel: 0, pur: 0 }, { id: 1019, catid: 26, val: 19, sel: 0, pur: 0 }, { id: 1030, catid: 27, val: 1, sel: 0, pur: 0 }, { id: 1031, catid: 27, val: 2, sel: 0, pur: 0 }, { id: 1032, catid: 27, val: 3, sel: 0, pur: 0 }, { id: 1033, catid: 27, val: 4, sel: 0, pur: 0 }, { id: 1034, catid: 27, val: 5, sel: 0, pur: 0 }, { id: 1035, catid: 27, val: 6, sel: 0, pur: 0 }, { id: 1036, catid: 27, val: 7, sel: 0, pur: 0 }, { id: 1037, catid: 27, val: 8, sel: 0, pur: 0 }, { id: 1038, catid: 27, val: 9, sel: 0, pur: 0 }, { id: 1039, catid: 27, val: 10, sel: 0, pur: 0 }, { id: 1040, catid: 27, val: 11, sel: 0, pur: 0 }, { id: 1041, catid: 27, val: 12, sel: 0, pur: 0 }, { id: 1042, catid: 27, val: 13, sel: 0, pur: 0 }, { id: 1043, catid: 27, val: 14, sel: 0, pur: 0 }, { id: 1044, catid: 27, val: 15, sel: 0, pur: 0 }, { id: 1045, catid: 27, val: 16, sel: 0, pur: 0 }, { id: 1046, catid: 27, val: 17, sel: 0, pur: 0 }, { id: 1047, catid: 27, val: 18, sel: 0, pur: 0 }, { id: 1048, catid: 27, val: 19, sel: 0, pur: 0 }, { id: 1049, catid: 27, val: 20, sel: 0, pur: 0 }, { id: 1050, catid: 27, val: 21, sel: 0, pur: 0 }, { id: 1051, catid: 27, val: 22, sel: 0, pur: 0 }, { id: 1052, catid: 27, val: 23, sel: 0, pur: 0 }, { id: 1053, catid: 27, val: 24, sel: 0, pur: 0 }, { id: 1054, catid: 27, val: 25, sel: 0, pur: 0 }, { id: 1055, catid: 27, val: 26, sel: 0, pur: 0 }, { id: 1056, catid: 27, val: 27, sel: 0, pur: 0 }, { id: 1057, catid: 27, val: 28, sel: 0, pur: 0 }, { id: 1058, catid: 27, val: 29, sel: 0, pur: 0 }, { id: 1059, catid: 27, val: 30, sel: 0, pur: 0 }, { id: 1060, catid: 27, val: 31, sel: 0, pur: 0 }, { id: 1061, catid: 27, val: 32, sel: 0, pur: 0 }, { id: 1062, catid: 27, val: 33, sel: 0, pur: 0 }, { id: 1063, catid: 27, val: 34, sel: 0, pur: 0 }, { id: 1064, catid: 27, val: 35, sel: 0, pur: 0 }, { id: 1065, catid: 27, val: 36, sel: 0, pur: 0 }, { id: 1066, catid: 27, val: 37, sel: 0, pur: 0 }, { id: 1067, catid: 27, val: 38, sel: 0, pur: 0 }, { id: 1068, catid: 27, val: 39, sel: 0, pur: 0 }, { id: 1069, catid: 27, val: 40, sel: 0, pur: 0 }, { id: 1070, catid: 27, val: 41, sel: 0, pur: 0 }, { id: 1071, catid: 27, val: 42, sel: 0, pur: 0 }, { id: 1072, catid: 27, val: 43, sel: 0, pur: 0 }, { id: 1073, catid: 27, val: 44, sel: 0, pur: 0 }, { id: 1074, catid: 27, val: 45, sel: 0, pur: 0 }, { id: 1075, catid: 27, val: 46, sel: 0, pur: 0 }, { id: 1076, catid: 27, val: 47, sel: 0, pur: 0 }, { id: 1077, catid: 27, val: 48, sel: 0, pur: 0 }, { id: 1078, catid: 27, val: 49, sel: 0, pur: 0 }, { id: 1079, catid: 27, val: 50, sel: 0, pur: 0 }, { id: 1080, catid: 27, val: 51, sel: 0, pur: 0 }, { id: 1091, catid: 28, val: 1, sel: 0, pur: 0 }, { id: 1092, catid: 28, val: 2, sel: 0, pur: 0 }, { id: 1093, catid: 28, val: 3, sel: 0, pur: 0 }, { id: 1094, catid: 28, val: 4, sel: 0, pur: 0 }, { id: 1095, catid: 28, val: 5, sel: 0, pur: 0 }, { id: 1096, catid: 28, val: 6, sel: 0, pur: 0 }, { id: 1097, catid: 28, val: 7, sel: 0, pur: 0 }, { id: 1098, catid: 28, val: 8, sel: 0, pur: 0 }, { id: 1099, catid: 28, val: 9, sel: 0, pur: 0 }, { id: 1100, catid: 28, val: 10, sel: 0, pur: 0 }, { id: 1101, catid: 28, val: 11, sel: 0, pur: 0 }, { id: 1102, catid: 28, val: 12, sel: 0, pur: 0 }, { id: 1103, catid: 28, val: 13, sel: 0, pur: 0 }, { id: 1104, catid: 28, val: 14, sel: 0, pur: 0 }, { id: 1105, catid: 28, val: 15, sel: 0, pur: 0 }, { id: 1106, catid: 28, val: 16, sel: 0, pur: 0 }, { id: 1107, catid: 28, val: 17, sel: 0, pur: 0 }, { id: 1108, catid: 28, val: 18, sel: 0, pur: 0 }, { id: 1109, catid: 28, val: 19, sel: 0, pur: 0 }, { id: 1110, catid: 28, val: 20, sel: 0, pur: 0 }, { id: 1111, catid: 28, val: 21, sel: 0, pur: 0 }, { id: 1112, catid: 28, val: 22, sel: 0, pur: 0 }, { id: 1113, catid: 28, val: 23, sel: 0, pur: 0 }, { id: 1114, catid: 28, val: 24, sel: 0, pur: 0 }, { id: 1115, catid: 28, val: 25, sel: 0, pur: 0 }, { id: 1116, catid: 28, val: 26, sel: 0, pur: 0 }, { id: 1117, catid: 28, val: 27, sel: 0, pur: 0 }, { id: 1118, catid: 28, val: 28, sel: 0, pur: 0 }, { id: 1119, catid: 28, val: 29, sel: 0, pur: 0 }, { id: 1120, catid: 28, val: 30, sel: 0, pur: 0 }, { id: 1121, catid: 28, val: 31, sel: 0, pur: 0 }, { id: 1122, catid: 28, val: 32, sel: 0, pur: 0 }, { id: 1123, catid: 28, val: 33, sel: 0, pur: 0 }, { id: 1124, catid: 28, val: 34, sel: 0, pur: 0 }, { id: 1125, catid: 28, val: 35, sel: 0, pur: 0 }, { id: 1126, catid: 28, val: 36, sel: 0, pur: 0 }, { id: 1127, catid: 28, val: 37, sel: 0, pur: 0 }, { id: 1128, catid: 28, val: 38, sel: 0, pur: 0 }, { id: 1129, catid: 28, val: 39, sel: 0, pur: 0 }, { id: 1130, catid: 28, val: 40, sel: 0, pur: 0 }, { id: 1131, catid: 28, val: 41, sel: 0, pur: 0 }, { id: 1132, catid: 28, val: 42, sel: 0, pur: 0 }, { id: 1133, catid: 28, val: 43, sel: 0, pur: 0 }, { id: 1134, catid: 28, val: 44, sel: 0, pur: 0 }, { id: 1135, catid: 28, val: 45, sel: 0, pur: 0 }, { id: 1136, catid: 28, val: 46, sel: 0, pur: 0 }, { id: 1137, catid: 28, val: 47, sel: 0, pur: 0 }, { id: 1138, catid: 28, val: 48, sel: 0, pur: 0 }, { id: 1139, catid: 28, val: 49, sel: 0, pur: 0 }, { id: 1140, catid: 28, val: 50, sel: 0, pur: 0 }, { id: 1141, catid: 28, val: 51, sel: 0, pur: 0 }, { id: 1142, catid: 28, val: 52, sel: 0, pur: 0 }, { id: 1143, catid: 28, val: 53, sel: 0, pur: 0 }, { id: 1144, catid: 28, val: 54, sel: 0, pur: 0 }, { id: 1145, catid: 28, val: 55, sel: 0, pur: 0 }, { id: 1146, catid: 28, val: 56, sel: 0, pur: 0 }, { id: 1147, catid: 28, val: 57, sel: 0, pur: 0 }, { id: 1148, catid: 28, val: 58, sel: 0, pur: 0 }, { id: 1149, catid: 28, val: 59, sel: 0, pur: 0 }, { id: 1150, catid: 28, val: 60, sel: 0, pur: 0 }, { id: 1151, catid: 28, val: 61, sel: 0, pur: 0 }, { id: 1152, catid: 28, val: 62, sel: 0, pur: 0 }, { id: 1153, catid: 28, val: 63, sel: 0, pur: 0 }, { id: 1154, catid: 28, val: 64, sel: 0, pur: 0 }, { id: 1155, catid: 28, val: 65, sel: 0, pur: 0 }, { id: 1156, catid: 28, val: 66, sel: 0, pur: 0 }, { id: 1167, catid: 29, val: 1, sel: 0, pur: 0 }, { id: 1168, catid: 29, val: 2, sel: 0, pur: 0 }, { id: 1169, catid: 29, val: 3, sel: 0, pur: 0 }, { id: 1170, catid: 29, val: 4, sel: 0, pur: 0 }, { id: 1171, catid: 29, val: 5, sel: 0, pur: 0 }, { id: 1172, catid: 29, val: 6, sel: 0, pur: 0 }, { id: 1173, catid: 29, val: 7, sel: 0, pur: 0 }, { id: 1174, catid: 29, val: 8, sel: 0, pur: 0 }, { id: 1175, catid: 29, val: 9, sel: 0, pur: 0 }, { id: 1176, catid: 29, val: 10, sel: 0, pur: 0 }, { id: 1177, catid: 29, val: 11, sel: 0, pur: 0 }, { id: 1178, catid: 29, val: 12, sel: 0, pur: 0 }, { id: 1179, catid: 29, val: 13, sel: 0, pur: 0 }, { id: 1180, catid: 29, val: 14, sel: 0, pur: 0 }, { id: 1181, catid: 29, val: 15, sel: 0, pur: 0 }, { id: 1182, catid: 29, val: 16, sel: 0, pur: 0 }, { id: 1183, catid: 29, val: 17, sel: 0, pur: 0 }, { id: 1184, catid: 29, val: 18, sel: 0, pur: 0 }, { id: 1185, catid: 29, val: 19, sel: 0, pur: 0 }, { id: 1186, catid: 29, val: 20, sel: 0, pur: 0 }, { id: 1187, catid: 29, val: 21, sel: 0, pur: 0 }, { id: 1188, catid: 29, val: 22, sel: 0, pur: 0 }, { id: 1189, catid: 29, val: 23, sel: 0, pur: 0 }, { id: 1190, catid: 29, val: 24, sel: 0, pur: 0 }, { id: 1191, catid: 29, val: 25, sel: 0, pur: 0 }, { id: 1192, catid: 29, val: 26, sel: 0, pur: 0 }, { id: 1193, catid: 29, val: 27, sel: 0, pur: 0 }, { id: 1194, catid: 29, val: 28, sel: 0, pur: 0 }, { id: 1195, catid: 29, val: 29, sel: 0, pur: 0 }, { id: 1196, catid: 29, val: 30, sel: 0, pur: 0 }, { id: 1197, catid: 29, val: 31, sel: 0, pur: 0 }, { id: 1198, catid: 29, val: 32, sel: 0, pur: 0 }, { id: 1199, catid: 29, val: 33, sel: 0, pur: 0 }, { id: 1200, catid: 29, val: 34, sel: 0, pur: 0 }, { id: 1201, catid: 29, val: 35, sel: 0, pur: 0 }, { id: 1202, catid: 29, val: 36, sel: 0, pur: 0 }, { id: 1203, catid: 29, val: 37, sel: 0, pur: 0 }, { id: 1204, catid: 29, val: 38, sel: 0, pur: 0 }, { id: 1205, catid: 29, val: 39, sel: 0, pur: 0 }, { id: 1206, catid: 29, val: 40, sel: 0, pur: 0 }, { id: 1207, catid: 29, val: 41, sel: 0, pur: 0 }, { id: 1208, catid: 29, val: 42, sel: 0, pur: 0 }, { id: 1209, catid: 29, val: 43, sel: 0, pur: 0 }, { id: 1210, catid: 29, val: 44, sel: 0, pur: 0 }, { id: 1211, catid: 29, val: 45, sel: 0, pur: 0 }, { id: 1212, catid: 29, val: 46, sel: 0, pur: 0 }, { id: 1213, catid: 29, val: 47, sel: 0, pur: 0 }, { id: 1214, catid: 29, val: 48, sel: 0, pur: 0 }, { id: 1215, catid: 29, val: 49, sel: 0, pur: 0 }, { id: 1216, catid: 29, val: 50, sel: 0, pur: 0 }, { id: 1217, catid: 29, val: 51, sel: 0, pur: 0 }, { id: 1218, catid: 29, val: 52, sel: 0, pur: 0 }, { id: 1229, catid: 30, val: 1, sel: 0, pur: 0 }, { id: 1230, catid: 30, val: 2, sel: 0, pur: 0 }, { id: 1231, catid: 30, val: 3, sel: 0, pur: 0 }, { id: 1232, catid: 30, val: 4, sel: 0, pur: 0 }, { id: 1233, catid: 30, val: 5, sel: 0, pur: 0 }, { id: 1244, catid: 31, val: 1, sel: 0, pur: 0 }, { id: 1245, catid: 31, val: 2, sel: 0, pur: 0 }, { id: 1246, catid: 31, val: 3, sel: 0, pur: 0 }, { id: 1247, catid: 31, val: 4, sel: 0, pur: 0 }, { id: 1248, catid: 31, val: 5, sel: 0, pur: 0 }, { id: 1249, catid: 31, val: 6, sel: 0, pur: 0 }, { id: 1260, catid: 32, val: 1, sel: 0, pur: 0 }, { id: 1261, catid: 32, val: 2, sel: 0, pur: 0 }, { id: 1262, catid: 32, val: 3, sel: 0, pur: 0 }, { id: 1263, catid: 32, val: 4, sel: 0, pur: 0 }, { id: 1264, catid: 32, val: 5, sel: 0, pur: 0 }, { id: 1265, catid: 32, val: 6, sel: 0, pur: 0 }, { id: 1266, catid: 32, val: 7, sel: 0, pur: 0 }, { id: 1267, catid: 32, val: 8, sel: 0, pur: 0 }, { id: 1268, catid: 32, val: 9, sel: 0, pur: 0 }, { id: 1269, catid: 32, val: 10, sel: 0, pur: 0 }, { id: 1270, catid: 32, val: 11, sel: 0, pur: 0 }, { id: 1271, catid: 32, val: 12, sel: 0, pur: 0 }, { id: 1272, catid: 32, val: 13, sel: 0, pur: 0 }, { id: 1273, catid: 32, val: 14, sel: 0, pur: 0 }, { id: 1274, catid: 32, val: 15, sel: 0, pur: 0 }, { id: 1275, catid: 32, val: 16, sel: 0, pur: 0 }, { id: 1276, catid: 32, val: 17, sel: 0, pur: 0 }, { id: 1277, catid: 32, val: 18, sel: 0, pur: 0 }, { id: 1278, catid: 32, val: 19, sel: 0, pur: 0 }, { id: 1279, catid: 32, val: 20, sel: 0, pur: 0 }, { id: 1280, catid: 32, val: 21, sel: 0, pur: 0 }, { id: 1281, catid: 32, val: 22, sel: 0, pur: 0 }, { id: 1282, catid: 32, val: 23, sel: 0, pur: 0 }, { id: 1283, catid: 32, val: 24, sel: 0, pur: 0 }, { id: 1284, catid: 32, val: 25, sel: 0, pur: 0 }, { id: 1285, catid: 32, val: 26, sel: 0, pur: 0 }, { id: 1286, catid: 32, val: 27, sel: 0, pur: 0 }, { id: 1287, catid: 32, val: 28, sel: 0, pur: 0 }, { id: 1288, catid: 32, val: 29, sel: 0, pur: 0 }, { id: 1289, catid: 32, val: 30, sel: 0, pur: 0 }, { id: 1290, catid: 32, val: 31, sel: 0, pur: 0 }, { id: 1291, catid: 32, val: 32, sel: 0, pur: 0 }, { id: 1292, catid: 32, val: 33, sel: 0, pur: 0 }, { id: 1293, catid: 32, val: 34, sel: 0, pur: 0 }, { id: 1294, catid: 32, val: 35, sel: 0, pur: 0 }, { id: 1295, catid: 32, val: 36, sel: 0, pur: 0 }, { id: 1296, catid: 32, val: 37, sel: 0, pur: 0 }, { id: 1297, catid: 32, val: 38, sel: 0, pur: 0 }, { id: 1298, catid: 32, val: 39, sel: 0, pur: 0 }, { id: 1299, catid: 32, val: 40, sel: 0, pur: 0 }, { id: 1300, catid: 32, val: 41, sel: 0, pur: 0 }, { id: 1301, catid: 32, val: 42, sel: 0, pur: 0 }, { id: 1302, catid: 32, val: 43, sel: 0, pur: 0 }, { id: 1303, catid: 32, val: 44, sel: 0, pur: 0 }, { id: 1304, catid: 32, val: 45, sel: 0, pur: 0 }, { id: 1305, catid: 32, val: 46, sel: 0, pur: 0 }, { id: 1306, catid: 32, val: 47, sel: 0, pur: 0 }, { id: 1307, catid: 32, val: 48, sel: 0, pur: 0 }, { id: 1318, catid: 33, val: 1, sel: 0, pur: 0 }, { id: 1319, catid: 33, val: 2, sel: 0, pur: 0 }, { id: 1320, catid: 33, val: 3, sel: 0, pur: 0 }, { id: 1321, catid: 33, val: 4, sel: 0, pur: 0 }, { id: 1322, catid: 33, val: 5, sel: 0, pur: 0 }, { id: 1323, catid: 33, val: 6, sel: 0, pur: 0 }, { id: 1324, catid: 33, val: 7, sel: 0, pur: 0 }, { id: 1325, catid: 33, val: 8, sel: 0, pur: 0 }, { id: 1326, catid: 33, val: 9, sel: 0, pur: 0 }, { id: 1327, catid: 33, val: 10, sel: 0, pur: 0 }, { id: 1328, catid: 33, val: 11, sel: 0, pur: 0 }, { id: 1329, catid: 33, val: 12, sel: 0, pur: 0 }, { id: 1330, catid: 33, val: 13, sel: 0, pur: 0 }, { id: 1331, catid: 33, val: 14, sel: 0, pur: 0 }, { id: 1342, catid: 34, val: 1, sel: 0, pur: 0 }, { id: 1343, catid: 34, val: 2, sel: 0, pur: 0 }, { id: 1344, catid: 34, val: 3, sel: 0, pur: 0 }, { id: 1345, catid: 34, val: 4, sel: 0, pur: 0 }, { id: 1346, catid: 34, val: 5, sel: 0, pur: 0 }, { id: 1347, catid: 34, val: 6, sel: 0, pur: 0 }, { id: 1348, catid: 34, val: 7, sel: 0, pur: 0 }, { id: 1349, catid: 34, val: 8, sel: 0, pur: 0 }, { id: 1350, catid: 34, val: 9, sel: 0, pur: 0 }, { id: 1351, catid: 34, val: 10, sel: 0, pur: 0 }, { id: 1352, catid: 34, val: 11, sel: 0, pur: 0 }, { id: 1353, catid: 34, val: 12, sel: 0, pur: 0 }, { id: 1354, catid: 34, val: 13, sel: 0, pur: 0 }, { id: 1355, catid: 34, val: 14, sel: 0, pur: 0 }, { id: 1366, catid: 35, val: 1, sel: 0, pur: 0 }, { id: 1367, catid: 35, val: 2, sel: 0, pur: 0 }, { id: 1368, catid: 35, val: 3, sel: 0, pur: 0 }, { id: 1379, catid: 36, val: 1, sel: 0, pur: 0 }, { id: 1380, catid: 36, val: 2, sel: 0, pur: 0 }, { id: 1381, catid: 36, val: 3, sel: 0, pur: 0 }, { id: 1382, catid: 36, val: 4, sel: 0, pur: 0 }, { id: 1383, catid: 36, val: 5, sel: 0, pur: 0 }, { id: 1384, catid: 36, val: 6, sel: 0, pur: 0 }, { id: 1385, catid: 36, val: 7, sel: 0, pur: 0 }, { id: 1386, catid: 36, val: 8, sel: 0, pur: 0 }, { id: 1387, catid: 36, val: 9, sel: 0, pur: 0 }, { id: 1398, catid: 37, val: 1, sel: 0, pur: 0 }, { id: 1409, catid: 38, val: 1, sel: 0, pur: 0 }, { id: 1410, catid: 38, val: 2, sel: 0, pur: 0 }, { id: 1411, catid: 38, val: 3, sel: 0, pur: 0 }, { id: 1412, catid: 38, val: 4, sel: 0, pur: 0 }, { id: 1423, catid: 39, val: 1, sel: 0, pur: 0 }, { id: 1424, catid: 39, val: 2, sel: 0, pur: 0 }, { id: 1425, catid: 39, val: 3, sel: 0, pur: 0 }, { id: 1426, catid: 39, val: 4, sel: 0, pur: 0 }, { id: 1427, catid: 39, val: 5, sel: 0, pur: 0 }, { id: 1428, catid: 39, val: 6, sel: 0, pur: 0 }, { id: 1429, catid: 39, val: 7, sel: 0, pur: 0 }, { id: 1440, catid: 40, val: 1, sel: 0, pur: 0 }, { id: 1441, catid: 40, val: 2, sel: 0, pur: 0 }, { id: 1442, catid: 40, val: 3, sel: 0, pur: 0 }, { id: 1453, catid: 41, val: 1, sel: 0, pur: 0 }, { id: 1454, catid: 41, val: 2, sel: 0, pur: 0 }, { id: 1455, catid: 41, val: 3, sel: 0, pur: 0 }, { id: 1466, catid: 42, val: 1, sel: 0, pur: 0 }, { id: 1467, catid: 42, val: 2, sel: 0, pur: 0 }, { id: 1468, catid: 42, val: 3, sel: 0, pur: 0 }, { id: 1479, catid: 43, val: 1, sel: 0, pur: 0 }, { id: 1480, catid: 43, val: 2, sel: 0, pur: 0 }, { id: 1491, catid: 44, val: 1, sel: 0, pur: 0 }, { id: 1492, catid: 44, val: 2, sel: 0, pur: 0 }, { id: 1493, catid: 44, val: 3, sel: 0, pur: 0 }, { id: 1494, catid: 44, val: 4, sel: 0, pur: 0 }, { id: 1495, catid: 44, val: 5, sel: 0, pur: 0 }, { id: 1496, catid: 44, val: 6, sel: 0, pur: 0 }, { id: 1497, catid: 44, val: 7, sel: 0, pur: 0 }, { id: 1498, catid: 44, val: 8, sel: 0, pur: 0 }, { id: 1499, catid: 44, val: 9, sel: 0, pur: 0 }, { id: 1500, catid: 44, val: 10, sel: 0, pur: 0 }, { id: 1501, catid: 44, val: 11, sel: 0, pur: 0 }, { id: 1502, catid: 44, val: 12, sel: 0, pur: 0 }, { id: 1503, catid: 44, val: 13, sel: 0, pur: 0 }, { id: 1504, catid: 44, val: 14, sel: 0, pur: 0 }, { id: 1515, catid: 45, val: 1, sel: 0, pur: 0 }, { id: 1516, catid: 45, val: 2, sel: 0, pur: 0 }, { id: 1517, catid: 45, val: 3, sel: 0, pur: 0 }, { id: 1518, catid: 45, val: 4, sel: 0, pur: 0 }];
        } else if (key == NewTestament_LSN) {
            jsonArray = [
                { id: 46, val: 'മത്തായി Matthew' },
                { id: 47, val: 'മര്‍ക്കോസ് Mark' },
                { id: 48, val: 'ലൂക്കാ Luke' },
                { id: 49, val: 'യോഹന്നാ‌ന്‍ John' },
                { id: 50, val: 'അപ്പ. പ്രവര്‍ത്തനങ്ങള്‍ Acts' },
                { id: 51, val: 'റോമാ  Romans' },
                { id: 52, val: '1 കൊറിന്തോസ് 1 Corinthians' },
                { id: 53, val: '2 കൊറിന്തോസ് 2 Corinthians' },
                { id: 54, val: 'ഗലാത്തിയാ Galatians' },
                { id: 55, val: 'എഫേസോസ് Ephesians' },
                { id: 56, val: 'ഫിലിപ്പി Philippians' },
                { id: 57, val: 'കൊളോസോസ് Colossians' },
                { id: 58, val: '1 തെസലോനിക്കാ 1 Thessalonians' },
                { id: 59, val: '2 തെസലോനിക്കാ 2 Thessalonians' },
                { id: 60, val: '1 തിമോത്തേയോസ് 1 Timothy' },
                { id: 61, val: '2 തിമോത്തേയോസ് 2 Timothy' },
                { id: 62, val: 'തീത്തോസ് Titus' },
                { id: 63, val: 'ഫിലെമോ‌ന്‍ Philemon' },
                { id: 64, val: 'ഹെബ്രായര്‍ Hebrews' },
                { id: 65, val: 'യാക്കോബ് James' },
                { id: 66, val: '1 പത്രോസ് 1 Peter' },
                { id: 67, val: '2 പത്രോസ് 2 Peter' },
                { id: 68, val: '1 യോഹന്നാ‌ന്‍ 1 John' },
                { id: 69, val: '2 യോഹന്നാ‌ന്‍ 2 John' },
                { id: 70, val: '3 യോഹന്നാ‌ന്‍ 3 John' },
                { id: 71, val: 'യുദാസ് Jude' },
                { id: 72, val: 'വെളിപാട് Revelation' }];
        } else if (key == NewChapters) {
            jsonArray = [{ id: 1529, catid: 46, val: 1, sel: 0, pur: 0 }, { id: 1530, catid: 46, val: 2, sel: 0, pur: 0 }, { id: 1531, catid: 46, val: 3, sel: 0, pur: 0 }, { id: 1532, catid: 46, val: 4, sel: 0, pur: 0 }, { id: 1533, catid: 46, val: 5, sel: 0, pur: 0 }, { id: 1534, catid: 46, val: 6, sel: 0, pur: 0 }, { id: 1535, catid: 46, val: 7, sel: 0, pur: 0 }, { id: 1536, catid: 46, val: 8, sel: 0, pur: 0 }, { id: 1537, catid: 46, val: 9, sel: 0, pur: 0 }, { id: 1538, catid: 46, val: 10, sel: 0, pur: 0 }, { id: 1539, catid: 46, val: 11, sel: 0, pur: 0 }, { id: 1540, catid: 46, val: 12, sel: 0, pur: 0 }, { id: 1541, catid: 46, val: 13, sel: 0, pur: 0 }, { id: 1542, catid: 46, val: 14, sel: 0, pur: 0 }, { id: 1543, catid: 46, val: 15, sel: 0, pur: 0 }, { id: 1544, catid: 46, val: 16, sel: 0, pur: 0 }, { id: 1545, catid: 46, val: 17, sel: 0, pur: 0 }, { id: 1546, catid: 46, val: 18, sel: 0, pur: 0 }, { id: 1547, catid: 46, val: 19, sel: 0, pur: 0 }, { id: 1548, catid: 46, val: 20, sel: 0, pur: 0 }, { id: 1549, catid: 46, val: 21, sel: 0, pur: 0 }, { id: 1550, catid: 46, val: 22, sel: 0, pur: 0 }, { id: 1551, catid: 46, val: 23, sel: 0, pur: 0 }, { id: 1552, catid: 46, val: 24, sel: 0, pur: 0 }, { id: 1553, catid: 46, val: 25, sel: 0, pur: 0 }, { id: 1554, catid: 46, val: 26, sel: 0, pur: 0 }, { id: 1555, catid: 46, val: 27, sel: 0, pur: 0 }, { id: 1556, catid: 46, val: 28, sel: 0, pur: 0 }, { id: 1567, catid: 47, val: 1, sel: 0, pur: 0 }, { id: 1568, catid: 47, val: 2, sel: 0, pur: 0 }, { id: 1569, catid: 47, val: 3, sel: 0, pur: 0 }, { id: 1570, catid: 47, val: 4, sel: 0, pur: 0 }, { id: 1571, catid: 47, val: 5, sel: 0, pur: 0 }, { id: 1572, catid: 47, val: 6, sel: 0, pur: 0 }, { id: 1573, catid: 47, val: 7, sel: 0, pur: 0 }, { id: 1574, catid: 47, val: 8, sel: 0, pur: 0 }, { id: 1575, catid: 47, val: 9, sel: 0, pur: 0 }, { id: 1576, catid: 47, val: 10, sel: 0, pur: 0 }, { id: 1577, catid: 47, val: 11, sel: 0, pur: 0 }, { id: 1578, catid: 47, val: 12, sel: 0, pur: 0 }, { id: 1579, catid: 47, val: 13, sel: 0, pur: 0 }, { id: 1580, catid: 47, val: 14, sel: 0, pur: 0 }, { id: 1581, catid: 47, val: 15, sel: 0, pur: 0 }, { id: 1582, catid: 47, val: 16, sel: 0, pur: 0 }, { id: 1593, catid: 48, val: 1, sel: 0, pur: 0 }, { id: 1594, catid: 48, val: 2, sel: 0, pur: 0 }, { id: 1595, catid: 48, val: 3, sel: 0, pur: 0 }, { id: 1596, catid: 48, val: 4, sel: 0, pur: 0 }, { id: 1597, catid: 48, val: 5, sel: 0, pur: 0 }, { id: 1598, catid: 48, val: 6, sel: 0, pur: 0 }, { id: 1599, catid: 48, val: 7, sel: 0, pur: 0 }, { id: 1600, catid: 48, val: 8, sel: 0, pur: 0 }, { id: 1601, catid: 48, val: 9, sel: 0, pur: 0 }, { id: 1602, catid: 48, val: 10, sel: 0, pur: 0 }, { id: 1603, catid: 48, val: 11, sel: 0, pur: 0 }, { id: 1604, catid: 48, val: 12, sel: 0, pur: 0 }, { id: 1605, catid: 48, val: 13, sel: 0, pur: 0 }, { id: 1606, catid: 48, val: 14, sel: 0, pur: 0 }, { id: 1607, catid: 48, val: 15, sel: 0, pur: 0 }, { id: 1608, catid: 48, val: 16, sel: 0, pur: 0 }, { id: 1609, catid: 48, val: 17, sel: 0, pur: 0 }, { id: 1610, catid: 48, val: 18, sel: 0, pur: 0 }, { id: 1611, catid: 48, val: 19, sel: 0, pur: 0 }, { id: 1612, catid: 48, val: 20, sel: 0, pur: 0 }, { id: 1613, catid: 48, val: 21, sel: 0, pur: 0 }, { id: 1614, catid: 48, val: 22, sel: 0, pur: 0 }, { id: 1615, catid: 48, val: 23, sel: 0, pur: 0 }, { id: 1616, catid: 48, val: 24, sel: 0, pur: 0 }, { id: 1627, catid: 49, val: 1, sel: 0, pur: 0 }, { id: 1628, catid: 49, val: 2, sel: 0, pur: 0 }, { id: 1629, catid: 49, val: 3, sel: 0, pur: 0 }, { id: 1630, catid: 49, val: 4, sel: 0, pur: 0 }, { id: 1631, catid: 49, val: 5, sel: 0, pur: 0 }, { id: 1632, catid: 49, val: 6, sel: 0, pur: 0 }, { id: 1633, catid: 49, val: 7, sel: 0, pur: 0 }, { id: 1634, catid: 49, val: 8, sel: 0, pur: 0 }, { id: 1635, catid: 49, val: 9, sel: 0, pur: 0 }, { id: 1636, catid: 49, val: 10, sel: 0, pur: 0 }, { id: 1637, catid: 49, val: 11, sel: 0, pur: 0 }, { id: 1638, catid: 49, val: 12, sel: 0, pur: 0 }, { id: 1639, catid: 49, val: 13, sel: 0, pur: 0 }, { id: 1640, catid: 49, val: 14, sel: 0, pur: 0 }, { id: 1641, catid: 49, val: 15, sel: 0, pur: 0 }, { id: 1642, catid: 49, val: 16, sel: 0, pur: 0 }, { id: 1643, catid: 49, val: 17, sel: 0, pur: 0 }, { id: 1644, catid: 49, val: 18, sel: 0, pur: 0 }, { id: 1645, catid: 49, val: 19, sel: 0, pur: 0 }, { id: 1646, catid: 49, val: 20, sel: 0, pur: 0 }, { id: 1647, catid: 49, val: 21, sel: 0, pur: 0 }, { id: 1658, catid: 50, val: 1, sel: 0, pur: 0 }, { id: 1659, catid: 50, val: 2, sel: 0, pur: 0 }, { id: 1660, catid: 50, val: 3, sel: 0, pur: 0 }, { id: 1661, catid: 50, val: 4, sel: 0, pur: 0 }, { id: 1662, catid: 50, val: 5, sel: 0, pur: 0 }, { id: 1663, catid: 50, val: 6, sel: 0, pur: 0 }, { id: 1664, catid: 50, val: 7, sel: 0, pur: 0 }, { id: 1665, catid: 50, val: 8, sel: 0, pur: 0 }, { id: 1666, catid: 50, val: 9, sel: 0, pur: 0 }, { id: 1667, catid: 50, val: 10, sel: 0, pur: 0 }, { id: 1668, catid: 50, val: 11, sel: 0, pur: 0 }, { id: 1669, catid: 50, val: 12, sel: 0, pur: 0 }, { id: 1670, catid: 50, val: 13, sel: 0, pur: 0 }, { id: 1671, catid: 50, val: 14, sel: 0, pur: 0 }, { id: 1672, catid: 50, val: 15, sel: 0, pur: 0 }, { id: 1673, catid: 50, val: 16, sel: 0, pur: 0 }, { id: 1674, catid: 50, val: 17, sel: 0, pur: 0 }, { id: 1675, catid: 50, val: 18, sel: 0, pur: 0 }, { id: 1676, catid: 50, val: 19, sel: 0, pur: 0 }, { id: 1677, catid: 50, val: 20, sel: 0, pur: 0 }, { id: 1678, catid: 50, val: 21, sel: 0, pur: 0 }, { id: 1679, catid: 50, val: 22, sel: 0, pur: 0 }, { id: 1680, catid: 50, val: 23, sel: 0, pur: 0 }, { id: 1681, catid: 50, val: 24, sel: 0, pur: 0 }, { id: 1682, catid: 50, val: 25, sel: 0, pur: 0 }, { id: 1683, catid: 50, val: 26, sel: 0, pur: 0 }, { id: 1684, catid: 50, val: 27, sel: 0, pur: 0 }, { id: 1685, catid: 50, val: 28, sel: 0, pur: 0 }, { id: 1696, catid: 51, val: 1, sel: 0, pur: 0 }, { id: 1697, catid: 51, val: 2, sel: 0, pur: 0 }, { id: 1698, catid: 51, val: 3, sel: 0, pur: 0 }, { id: 1699, catid: 51, val: 4, sel: 0, pur: 0 }, { id: 1700, catid: 51, val: 5, sel: 0, pur: 0 }, { id: 1701, catid: 51, val: 6, sel: 0, pur: 0 }, { id: 1702, catid: 51, val: 7, sel: 0, pur: 0 }, { id: 1703, catid: 51, val: 8, sel: 0, pur: 0 }, { id: 1704, catid: 51, val: 9, sel: 0, pur: 0 }, { id: 1705, catid: 51, val: 10, sel: 0, pur: 0 }, { id: 1706, catid: 51, val: 11, sel: 0, pur: 0 }, { id: 1707, catid: 51, val: 12, sel: 0, pur: 0 }, { id: 1708, catid: 51, val: 13, sel: 0, pur: 0 }, { id: 1709, catid: 51, val: 14, sel: 0, pur: 0 }, { id: 1710, catid: 51, val: 15, sel: 0, pur: 0 }, { id: 1711, catid: 51, val: 16, sel: 0, pur: 0 }, { id: 1722, catid: 52, val: 1, sel: 0, pur: 0 }, { id: 1723, catid: 52, val: 2, sel: 0, pur: 0 }, { id: 1724, catid: 52, val: 3, sel: 0, pur: 0 }, { id: 1725, catid: 52, val: 4, sel: 0, pur: 0 }, { id: 1726, catid: 52, val: 5, sel: 0, pur: 0 }, { id: 1727, catid: 52, val: 6, sel: 0, pur: 0 }, { id: 1728, catid: 52, val: 7, sel: 0, pur: 0 }, { id: 1729, catid: 52, val: 8, sel: 0, pur: 0 }, { id: 1730, catid: 52, val: 9, sel: 0, pur: 0 }, { id: 1731, catid: 52, val: 10, sel: 0, pur: 0 }, { id: 1732, catid: 52, val: 11, sel: 0, pur: 0 }, { id: 1733, catid: 52, val: 12, sel: 0, pur: 0 }, { id: 1734, catid: 52, val: 13, sel: 0, pur: 0 }, { id: 1735, catid: 52, val: 14, sel: 0, pur: 0 }, { id: 1736, catid: 52, val: 15, sel: 0, pur: 0 }, { id: 1737, catid: 52, val: 16, sel: 0, pur: 0 }, { id: 1748, catid: 53, val: 1, sel: 0, pur: 0 }, { id: 1749, catid: 53, val: 2, sel: 0, pur: 0 }, { id: 1750, catid: 53, val: 3, sel: 0, pur: 0 }, { id: 1751, catid: 53, val: 4, sel: 0, pur: 0 }, { id: 1752, catid: 53, val: 5, sel: 0, pur: 0 }, { id: 1753, catid: 53, val: 6, sel: 0, pur: 0 }, { id: 1754, catid: 53, val: 7, sel: 0, pur: 0 }, { id: 1755, catid: 53, val: 8, sel: 0, pur: 0 }, { id: 1756, catid: 53, val: 9, sel: 0, pur: 0 }, { id: 1757, catid: 53, val: 10, sel: 0, pur: 0 }, { id: 1758, catid: 53, val: 11, sel: 0, pur: 0 }, { id: 1759, catid: 53, val: 12, sel: 0, pur: 0 }, { id: 1760, catid: 53, val: 13, sel: 0, pur: 0 }, { id: 1771, catid: 54, val: 1, sel: 0, pur: 0 }, { id: 1772, catid: 54, val: 2, sel: 0, pur: 0 }, { id: 1773, catid: 54, val: 3, sel: 0, pur: 0 }, { id: 1774, catid: 54, val: 4, sel: 0, pur: 0 }, { id: 1775, catid: 54, val: 5, sel: 0, pur: 0 }, { id: 1776, catid: 54, val: 6, sel: 0, pur: 0 }, { id: 1787, catid: 55, val: 1, sel: 0, pur: 0 }, { id: 1788, catid: 55, val: 2, sel: 0, pur: 0 }, { id: 1789, catid: 55, val: 3, sel: 0, pur: 0 }, { id: 1790, catid: 55, val: 4, sel: 0, pur: 0 }, { id: 1791, catid: 55, val: 5, sel: 0, pur: 0 }, { id: 1792, catid: 55, val: 6, sel: 0, pur: 0 }, { id: 1803, catid: 56, val: 1, sel: 0, pur: 0 }, { id: 1804, catid: 56, val: 2, sel: 0, pur: 0 }, { id: 1805, catid: 56, val: 3, sel: 0, pur: 0 }, { id: 1806, catid: 56, val: 4, sel: 0, pur: 0 }, { id: 1817, catid: 57, val: 1, sel: 0, pur: 0 }, { id: 1818, catid: 57, val: 2, sel: 0, pur: 0 }, { id: 1819, catid: 57, val: 3, sel: 0, pur: 0 }, { id: 1820, catid: 57, val: 4, sel: 0, pur: 0 }, { id: 1831, catid: 58, val: 1, sel: 0, pur: 0 }, { id: 1832, catid: 58, val: 2, sel: 0, pur: 0 }, { id: 1833, catid: 58, val: 3, sel: 0, pur: 0 }, { id: 1834, catid: 58, val: 4, sel: 0, pur: 0 }, { id: 1835, catid: 58, val: 5, sel: 0, pur: 0 }, { id: 1846, catid: 59, val: 1, sel: 0, pur: 0 }, { id: 1847, catid: 59, val: 2, sel: 0, pur: 0 }, { id: 1848, catid: 59, val: 3, sel: 0, pur: 0 }, { id: 1859, catid: 60, val: 1, sel: 0, pur: 0 }, { id: 1860, catid: 60, val: 2, sel: 0, pur: 0 }, { id: 1861, catid: 60, val: 3, sel: 0, pur: 0 }, { id: 1862, catid: 60, val: 4, sel: 0, pur: 0 }, { id: 1863, catid: 60, val: 5, sel: 0, pur: 0 }, { id: 1864, catid: 60, val: 6, sel: 0, pur: 0 }, { id: 1875, catid: 61, val: 1, sel: 0, pur: 0 }, { id: 1876, catid: 61, val: 2, sel: 0, pur: 0 }, { id: 1877, catid: 61, val: 3, sel: 0, pur: 0 }, { id: 1878, catid: 61, val: 4, sel: 0, pur: 0 }, { id: 1889, catid: 62, val: 1, sel: 0, pur: 0 }, { id: 1890, catid: 62, val: 2, sel: 0, pur: 0 }, { id: 1891, catid: 62, val: 3, sel: 0, pur: 0 }, { id: 1902, catid: 63, val: 1, sel: 0, pur: 0 }, { id: 1913, catid: 64, val: 1, sel: 0, pur: 0 }, { id: 1914, catid: 64, val: 2, sel: 0, pur: 0 }, { id: 1915, catid: 64, val: 3, sel: 0, pur: 0 }, { id: 1916, catid: 64, val: 4, sel: 0, pur: 0 }, { id: 1917, catid: 64, val: 5, sel: 0, pur: 0 }, { id: 1918, catid: 64, val: 6, sel: 0, pur: 0 }, { id: 1919, catid: 64, val: 7, sel: 0, pur: 0 }, { id: 1920, catid: 64, val: 8, sel: 0, pur: 0 }, { id: 1921, catid: 64, val: 9, sel: 0, pur: 0 }, { id: 1922, catid: 64, val: 10, sel: 0, pur: 0 }, { id: 1923, catid: 64, val: 11, sel: 0, pur: 0 }, { id: 1924, catid: 64, val: 12, sel: 0, pur: 0 }, { id: 1925, catid: 64, val: 13, sel: 0, pur: 0 }, { id: 1936, catid: 65, val: 1, sel: 0, pur: 0 }, { id: 1937, catid: 65, val: 2, sel: 0, pur: 0 }, { id: 1938, catid: 65, val: 3, sel: 0, pur: 0 }, { id: 1939, catid: 65, val: 4, sel: 0, pur: 0 }, { id: 1940, catid: 65, val: 5, sel: 0, pur: 0 }, { id: 1951, catid: 66, val: 1, sel: 0, pur: 0 }, { id: 1952, catid: 66, val: 2, sel: 0, pur: 0 }, { id: 1953, catid: 66, val: 3, sel: 0, pur: 0 }, { id: 1954, catid: 66, val: 4, sel: 0, pur: 0 }, { id: 1955, catid: 66, val: 5, sel: 0, pur: 0 }, { id: 1966, catid: 67, val: 1, sel: 0, pur: 0 }, { id: 1967, catid: 67, val: 2, sel: 0, pur: 0 }, { id: 1968, catid: 67, val: 3, sel: 0, pur: 0 }, { id: 1979, catid: 68, val: 1, sel: 0, pur: 0 }, { id: 1980, catid: 68, val: 2, sel: 0, pur: 0 }, { id: 1981, catid: 68, val: 3, sel: 0, pur: 0 }, { id: 1982, catid: 68, val: 4, sel: 0, pur: 0 }, { id: 1983, catid: 68, val: 5, sel: 0, pur: 0 }, { id: 1994, catid: 69, val: 1, sel: 0, pur: 0 }, { id: 2005, catid: 70, val: 1, sel: 0, pur: 0 }, { id: 2016, catid: 71, val: 1, sel: 0, pur: 0 }, { id: 2027, catid: 72, val: 1, sel: 0, pur: 0 }, { id: 2028, catid: 72, val: 2, sel: 0, pur: 0 }, { id: 2029, catid: 72, val: 3, sel: 0, pur: 0 }, { id: 2030, catid: 72, val: 4, sel: 0, pur: 0 }, { id: 2031, catid: 72, val: 5, sel: 0, pur: 0 }, { id: 2032, catid: 72, val: 6, sel: 0, pur: 0 }, { id: 2033, catid: 72, val: 7, sel: 0, pur: 0 }, { id: 2034, catid: 72, val: 8, sel: 0, pur: 0 }, { id: 2035, catid: 72, val: 9, sel: 0, pur: 0 }, { id: 2036, catid: 72, val: 10, sel: 0, pur: 0 }, { id: 2037, catid: 72, val: 11, sel: 0, pur: 0 }, { id: 2038, catid: 72, val: 12, sel: 0, pur: 0 }, { id: 2039, catid: 72, val: 13, sel: 0, pur: 0 }, { id: 2040, catid: 72, val: 14, sel: 0, pur: 0 }, { id: 2041, catid: 72, val: 15, sel: 0, pur: 0 }, { id: 2042, catid: 72, val: 16, sel: 0, pur: 0 }, { id: 2043, catid: 72, val: 17, sel: 0, pur: 0 }, { id: 2044, catid: 72, val: 18, sel: 0, pur: 0 }, { id: 2045, catid: 72, val: 19, sel: 0, pur: 0 }, { id: 2046, catid: 72, val: 20, sel: 0, pur: 0 }, { id: 2047, catid: 72, val: 21, sel: 0, pur: 0 }, { id: 2048, catid: 72, val: 22, sel: 0, pur: 0 }];
        }
        AddLocalStorage(key, JSON.stringify(jsonArray));
    }
    
    else{
        if ((key == OldChapters) &&
        (localStorage.getItem(PrayerVersion) == null))
        {
            var oldChaptersData = GetLocalStorage(OldChapters);

            let newObject;
            let indexToInsert;
            indexToInsert = oldChaptersData.findIndex(item=>item.id===636);
            if(indexToInsert !==-1){
                newObject = { id: 648, catid: 18, val: 12, sel: 0, pur: 0 };
                oldChaptersData.splice(indexToInsert, 0, newObject);
                newObject = { id: 647, catid: 18, val: 11, sel: 0, pur: 0 };
                oldChaptersData.splice(indexToInsert, 0, newObject);
            }
            
            indexToInsert = oldChaptersData.findIndex(item=>item.id===639);
            if(indexToInsert !==-1){
                newObject = { id: 650, catid: 18, val: 3, sel: 0, pur: 0  };
                oldChaptersData.splice(indexToInsert, 0, newObject);
                newObject = { id: 649, catid: 18, val: 13, sel: 0, pur: 0 };
                oldChaptersData.splice(indexToInsert, 0, newObject);
            }
            
            indexToInsert = oldChaptersData.findIndex(item=>item.id===640);
            if(indexToInsert !==-1){
                newObject = { id: 652, catid: 18, val: 14, sel: 0, pur: 0 }; 
                oldChaptersData.splice(indexToInsert, 0, newObject);
                newObject = { id: 651, catid: 18, val: 13, sel: 0, pur: 0 }; 
                oldChaptersData.splice(indexToInsert, 0, newObject);
            }
            
            indexToInsert = oldChaptersData.findIndex(item=>item.id===641);
            if(indexToInsert !==-1){
                newObject = { id: 654, catid: 18, val: 5, sel: 0, pur: 0  };
                oldChaptersData.splice(indexToInsert, 0, newObject);
                newObject = { id: 653, catid: 18, val: 15, sel: 0, pur: 0 }; 
                oldChaptersData.splice(indexToInsert, 0, newObject);
            }
            
            indexToInsert = oldChaptersData.findIndex(item=>item.id===644);
            if(indexToInsert !==-1){
                newObject = { id: 656, catid: 18, val: 8, sel: 0, pur: 0  };
                oldChaptersData.splice(indexToInsert, 0, newObject);
                newObject = { id: 655, catid: 18, val: 16, sel: 0, pur: 0 }; 
                oldChaptersData.splice(indexToInsert, 0, newObject);
            }
            
            AddLocalStorage(key, JSON.stringify(oldChaptersData));
            AddLocalStorage(PrayerVersion, '1.0');
        }
    }
   
}

var USR_ADMN_TAB = '#v_tabs'
var USR_TAB = '#usr_tabs';
var ADMN_TAB = "#tabs";

var USR_LST_ACC = '.old-accordion';
var USR_LST_TAB = '#v_tabs-2';
var USL_LST_ATTR = 'sel';

var PUR_LST_ACC = '.new-accordion';
var PUR_LST_TAB = '#v_tabs-3';
var PUR_LST_ATTR = 'sel';

var PEN_LST_ACC = '.pending_accordion';
var PEN_LST_TAB = '#usr_tabs-3';

var CAT_TBL = 'table_c';
var ITM_TBL = 'table_i';

$(document).ready(function () {
    $(USR_ADMN_TAB).tabs();
    //Initialize
    Initialize();

    //User-Bind-3-Tabs
    BindUserData();
    //User-Bind-Badge
    BindBadge();

});

function Initialize() {
    LoadFromJSON(OldTestament_LSN);
    LoadFromJSON(OldChapters);
    LoadFromJSON(NewTestament_LSN);
    LoadFromJSON(NewChapters);
}

function BindUserData() {
    var oldTestamentData = GetLocalStorage(OldTestament_LSN);
    var oldChaptersData = GetLocalStorage(OldChapters);
    var newTestamentData = GetLocalStorage(NewTestament_LSN);
    var newChaptersData = GetLocalStorage(NewChapters);

    //User-List
    BindAccordion(USR_LST_ACC, oldTestamentData, oldChaptersData, USR_LST_TAB, USL_LST_ATTR);
    BindAccordion(PUR_LST_ACC, newTestamentData, newChaptersData, PUR_LST_TAB, PUR_LST_ATTR);
}

function BindBadge() {
    var listCount, purchasedCount, pendingCount;

    $(USR_LST_TAB + '-badge').html(listCount);
    $(PUR_LST_TAB + '-badge').html(purchasedCount);
    $(PEN_LST_TAB + '-badge').text(pendingCount);
}

function BindCheckBoxClick(tabId, attrId) {
    $(tabId + ' input[type=checkbox]').change(function () {
        Select_Item($(this).is(':checked'), $(this).val(), "id", attrId);
        var $this = $(this);
        var $parent = $this.parent();
        var $checkboxdiv = $this.closest('div');
        var totalCount = 0;
        var checkedCount = 0;
        var h3Tagdiv = $checkboxdiv.prev('h3');
        //h3Tagdiv.find('span').remove();
        if ($(this).is(':checked')) {
            AlertMessage("Success", h3Tagdiv.clone().children().remove().end().text() + $(this).closest('label').text() + " selected successfully.");
            //if (tabId == PUR_LST_TAB) {
            //$checkboxdiv.prev('h3').find('span[class=badge]').html('hello');
            //console.log($checkboxdiv.prev('span').length);

            //$checkboxdiv.append($parent);
            //}
        } else {
            AlertMessage("Info", h3Tagdiv.clone().children().remove().end().text() + $(this).closest('label').text() + " removed successfully.");
            //if (tabId == PUR_LST_TAB) {
            //    $checkboxdiv.prepend($parent);
            //}
        }

        totalCount = $checkboxdiv.find('input:checkbox').length;
        checkedCount = $checkboxdiv.find('input:checkbox:checked').length;
        $checkboxdiv.prev('h3').find('span[class=badge]').html(checkedCount + '/' + totalCount);

        if (totalCount == checkedCount) {
            $checkboxdiv.prev('h3').css('background-color', '#00ff00').css('background-image', 'none');
        } else if (checkedCount > 0) {
            $checkboxdiv.prev('h3').css('background-color', 'yellow').css('background-image', 'none');
        } else {
            $checkboxdiv.prev('h3').removeAttr('style');
        }

        //if (tabId == USR_LST_TAB) {
        //    //BindPurchase();
        //    //BindPending();
        //} else if (tabId == PUR_LST_TAB) {
        //    totalCount = $checkboxdiv.find('input:checkbox').length;
        //    checkedCount = $checkboxdiv.find('input:checkbox:checked').length;
        //    $checkboxdiv.prev('h3').find('span[class=badge]').html(checkedCount + '/' + totalCount);
        //    //BindPending();
        //} else if (tabId == PEN_LST_TAB) {
        //    $(this).parent(".checkbox").fadeOut(500, function () { $(this).remove() });
        //    //BindPurchase();
        //}
    });
}

function Select_Item(checked, id, keyColumn, attrId) {
    var sel_items;
    if (GetLocalStorage(OldChapters) != null) {
        sel_items = GetLocalStorage(OldChapters);
    }

    for (var i = 0; i < sel_items.length; i++) {
        if (sel_items[i][keyColumn] == id) {
            if (USL_LST_ATTR == attrId) {
                sel_items[i][PUR_LST_ATTR] = 0;
            }
            sel_items[i][attrId] = checked ? 1 : 0;
        }
    }

    AddLocalStorage(OldChapters, JSON.stringify(sel_items));


    if (GetLocalStorage(NewChapters) != null) {
        sel_items = GetLocalStorage(NewChapters);
    }

    for (var i = 0; i < sel_items.length; i++) {
        if (sel_items[i][keyColumn] == id) {
            if (USL_LST_ATTR == attrId) {
                sel_items[i][PUR_LST_ATTR] = 0;
            }
            sel_items[i][attrId] = checked ? 1 : 0;
        }
    }

    AddLocalStorage(NewChapters, JSON.stringify(sel_items));

    BindBadge();
}

function Select_AllItem() {
    var sel_items;
    if (GetLocalStorage(ITEM_LSN) != null) {
        sel_items = GetLocalStorage(ITEM_LSN);
    }

    for (var i = 0; i < sel_items.length; i++) {
        sel_items[i].sel = 0;
        sel_items[i].pur = 0;
    }

    AddLocalStorage(ITEM_LSN, JSON.stringify(sel_items));
    BindBadge();
}

function AddCategory(name) {
    var categories;
    if (name != null && name != '') {
        categories = GetLocalStorage(CATEGORY_LSN);
        if (CheckExists(categories, name) == false) {
            var key = GetNextID(categories);
            var item = { id: key, val: name };
            categories.push(item);
            AddLocalStorage(CATEGORY_LSN, JSON.stringify(categories));
            //AddToTable(CAT_TBL, name);
            BindTable(CAT_TBL, CATEGORY_LSN, -1);
            BindSelect('categories', CATEGORY_LSN);
            ClearControl();
            BindUserData();
        } else {
            AlertMessage("Info", "Category already exists.");
        }
    } else {
        AlertMessage("Warning", "Category cannot be empty.");
    }
}

function AddItem(categoryId, categoryName, name) {
    if (name != null && name != '') {
        var items = GetLocalStorage(ITEM_LSN);
        if (CheckExists(items, name) == false) {
            var key = GetNextID(items);
            var item = { id: key, catid: categoryId, val: name, sel: 0, pur: 0 };
            items.push(item);
            AddLocalStorage(ITEM_LSN, JSON.stringify(items));
            //AddToTable_I(ITM_TBL, categoryName, name);
            BindTable_I(ITM_TBL, CATEGORY_LSN, ITEM_LSN, -1);
            ClearControl();
            BindUserData();
        } else {
            AlertMessage("Info", "Item already exists.");
        }
    } else {
        AlertMessage("Warning", "Item cannot be empty.");
    }
}

function AlertMessage(msgType, message) {
    var msgTypes = {
        Success: "alert-success",
        Info: "alert-info",
        Warning: "alert-warning",
        Danger: "alert-danger"
    };

    $('<div class="alert ' + msgTypes[msgType] + '"><strong>' + msgType + '! </strong>' + message + '</div>').show().fadeOut(2500).appendTo('#result');
}

function ClearControl() {
    $('#cat_name,#item_name').val('');
}

function CheckExists(JSONObject, searchString) {
    var hasMatch = false;
    for (var i = 0; i < JSONObject.length; i++) {
        var value = JSONObject[i].val;
        if (value == searchString) {
            hasMatch = true;
            break;
        }
    }
    return hasMatch;
}

function GetJSONValue(JSONObject, keyColumn, keyName, returnColumn) {
    var returnValue = '-1';
    for (var i = 0; i < JSONObject.length; i++) {
        var value = JSONObject[i][keyColumn];
        if (value == keyName) {
            returnValue = JSONObject[i][returnColumn];
            break;
        }
    }
    return returnValue
}

function GetNextID(JSONObject) {
    var id = -1;
    if (JSONObject.length > 0) {
        for (var i = 0; i < JSONObject.length; i++) {
            var value = JSONObject[i].id;
            if (value > id) {
                id = value;
            }
        }
        id = id + 1;
    }
    else {
        id = 1;
    }
    return id;
}

function BindAccordion(accordionCtrl, categoryData, itemData, tabId, attrId) {
    var accordionExists = $(accordionCtrl).hasClass("ui-accordion")
    $(accordionCtrl).empty();
    $.each(categoryData, function () {
        var arr = [];
        categoryId = this.id;
        arr = $.grep(itemData, function (a) { return a.catid == categoryId });
        if (tabId == PUR_LST_TAB) {
            arr.sort(function (a, b) {
                var x = a.pur; var y = b.pur;
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }
        if (arr.length > 0) {
            var fs;
            fs = $('<div class="checkbox-div" />');
            var checked;
            var checkedCount = 0;
            $.each(arr, function () {
                if (this[attrId] == 1) {
                    checked = 'checked';
                    checkedCount += 1;
                }
                else {
                    checked = '';
                }
                //fs.append('<label class="checkbox-inline"><input type="checkbox" ' + checked + ' value="' + this.id + '">' + this.val + '</label>');
                fs.append('<label class="chk_container col-md-2 col-sm-3">' + this.val + '<input type="checkbox" ' + checked + ' value="' + this.id + '"><span class="checkmark"></span></label>');
            });



            if (checkedCount == arr.length) {
                $(accordionCtrl).append('<h3 style=\'background-color:#00ff00; background-image:none\'>' + this.val + ' <span class="badge">' + checkedCount + '/' + arr.length + '</span></h3>');

            } else if (checkedCount > 0) {
                $(accordionCtrl).append('<h3 style=\'background-color: yellow; background-image:none\'>' + this.val + ' <span class="badge">' + checkedCount + '/' + arr.length + '</span></h3>');

            } else {
                $(accordionCtrl).append('<h3>' + this.val + ' <span class="badge">' + checkedCount + '/' + arr.length + '</span></h3>');
            }

            $(accordionCtrl).append(fs);
        }
    });

    BindCheckBoxClick(tabId, attrId);
    if (accordionExists) {
        $(accordionCtrl).accordion('refresh');
    } else {
        $(accordionCtrl).accordion({ collapsible: true, heightStyle: "content" });
    }
}

function BindTable(tableName, dataList, pageNumber) {
    pageNumber = parseInt(pageNumber);
    var data = GetLocalStorage(dataList);
    var tr;
    var categoryId = -1;

    var maxRecordsPerPage = 5;
    //var pg = Paging(pageNumber, data.length, maxRecordsPerPage);

    $('#' + tableName).find("tr:gt(0)").remove();
    for (var i = pg.startRecord - 1; i < pg.endRecord; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].val + "</td>");
        $('#' + tableName).append(tr);
    }

    $('.pg_cat').empty();
    for (var i = pg.startPage; i <= pg.endPage; i++) {
        $('.pg_cat').append('<li><a href="#">' + i + '</a></li>');
    }

    $('.pg_cat a').click(function () {
        BindTable(tableName, dataList, $(this).text());
    });
}

function BindTable_I(tableName, categoryDataList, dataList, pageNumber) {
    pageNumber = parseInt(pageNumber);
    var data = GetLocalStorage(dataList);
    var tr;
    var categoryName;
    var maxRecordsPerPage = 5;
    //var pg = Paging(pageNumber, data.length, maxRecordsPerPage);

    $('#' + tableName).find("tr:gt(0)").remove();
    for (var i = pg.startRecord - 1; i < pg.endRecord; i++) {
        tr = $('<tr/>');
        categoryName = GetJSONValue(GetLocalStorage(categoryDataList), "id", data[i].catid, "val")
        tr.append("<td>" + categoryName + "</td><td>" + data[i].val + "</td>");
        $('#' + tableName).append(tr);
    }

    $('.pg_item').empty();
    for (var i = pg.startPage; i <= pg.endPage; i++) {
        $('.pg_item').append('<li><a href="#">' + i + '</a></li>');
    }

    $('.pg_item a').click(function () {
        BindTable_I(tableName, categoryDataList, dataList, $(this).text());
    });
}

function BindSelect(selectControlName, dataList) {
    var data = GetLocalStorage(dataList);
    $('#' + selectControlName).find('option').remove()
    $.each(data, function () {
        $('#' + selectControlName).append('<option value=' + this.id + '>' + this.val + '</option>');
    });
}

function GetLocalStorage(key) {
    var items;
    if (localStorage.getItem(key) != null) {
        items = JSON.parse(localStorage.getItem(key));
    } else {
        items = [];
    }
    return items;
}

function AddLocalStorage(key, value) {
    localStorage.setItem(key, value);
}
