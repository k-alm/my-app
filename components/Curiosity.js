import {Text} from 'react-native'

export default function Curiosity(props){
    const { title, text, titleStyle, textStyle } = props;

    return(
        <>
            <Text style={titleStyle}>{title}</Text>
            <Text style={textStyle}>{text}</Text>
        </>
    )
}