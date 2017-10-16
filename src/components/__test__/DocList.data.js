import { List } from 'immutable'; 
const data = [
    {
        title: 'my cv1',
        content: '###this is cv1 - hihihi',
        createdAt: 1010101010,
        docId:'feefwefwefw',
        lastModified: 2313331314,
    },
    {
        title: 'my cv2',
        content: 'this is cv2',
        createdAt: 1010101010,
        docId:'feefwefewfwefwefw',
        lastModified: 2313331314,
    },
    {
        title: 'my cv3',
        content: 'this is cv3',
        createdAt: 1010101010,
        docId:'feeefwe3sdfwefwefw',
        lastModified: 2313331314,
    },
    {
        title: 'my cv4',
        content: 'this is cv4',
        createdAt: 1010101010,
        docId:'zeefeefwefwefw',
        lastModified: 2313331314,
    },
];
export default data;
export const ListTypeData = List(data);