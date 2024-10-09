
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native"
import { FullMovie } from "../../../core/entities/movie.entity";
import { useNavigation } from "@react-navigation/native";


interface Props {
    movie: FullMovie;
}

export const MovieHeader = ( {movie}:Props ) => {

    console.log({movie});
    
    const { height: screenHeight } = useWindowDimensions();
    const navigation = useNavigation();

  return (
    <>
        <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
            <View style={styles.imageBorder}>
                <Image 
                    style={styles.posterImage}
                    source={{ uri: movie.poster }}
                />
            </View>

            <View style={ styles.marginContainer }>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.subTitle}>{movie.originalTitle}</Text>
            </View>

            <View style= {styles.backButton}>
                <Pressable onPress={ () => navigation.goBack()}>
                    <Text style={ styles.backButtonText}>Regresar</Text>
                </Pressable>
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
  
      elevation: 9,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
  
    imageBorder: {
      flex: 1,
      overflow: 'hidden',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
    },
    posterImage: {
      flex: 1,
    },
  
    marginContainer: {
      marginHorizontal: 20,
      marginTop: 20,
    },
    subTitle: {
      fontSize: 16,
      opacity: 0.8,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    backButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      top: 35,
      left: 10,
    },
    backButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 10,
        marginLeft: 10,
  
    },
  });