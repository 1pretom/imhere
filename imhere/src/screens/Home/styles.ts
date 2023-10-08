import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container :{
      flex: 12,
      backgroundColor: '#131016',
      padding:24,
    },
    title:{
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 46
    },
    subtitle:{
      color: '#6b6b6b',
      fontSize: 16,
    },
    input:{
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        fontSize: 16,
        borderRadius: 8,
        padding: 16,
        marginRight: 10,
        color: '#FDFCFE'
    },
    button:{
        height: 56,
        backgroundColor: 'green',
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
               
    }, 
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 30,
        marginBotton: 50,   
    },
    listEmptyText:{
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center'
    }
  }) 