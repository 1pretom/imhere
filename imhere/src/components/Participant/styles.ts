import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name:{
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 16
        
    },
    button:{
        height: 56,
        backgroundColor: '#F23',
        color: '#FFF',
        fontSize: 16,
        borderRadius: 8,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FDFCFE',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
               
    }
});