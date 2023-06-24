const getFormattedDateTime = () => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const timeOfDay = hours < 12 ? "AM" : "PM";

    const formattedTime = `${hours % 12}:${minutes < 10 ? "0" + minutes : minutes}`;

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDateTime = `${timeOfDay} - ${formattedTime}, ${day}/${month}/${year}`;

    return formattedDateTime;

};
export default getFormattedDateTime