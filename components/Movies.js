import React from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'

import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

const Container = styled.View`
	padding: 20px 0;
`

const Label = styled.Text`
	color: #fff;
	font-weight: 700;
	font-size: 23px;
	margin-right: 10px;
	margin-top: 10px;
	margin-bottom: 15px;
	margin-left: 10px;
`
const MovieScroll = styled.ScrollView`
	padding-left: 10px;
`

const MoviePoster = styled.Image`
	width: ${Math.round((Dimensions.get('window').width * 35) / 100)}px;
	height: 200px;
`

const MovieCard = styled.View`
	padding-right: 9px;
`

const Movies = ({ label, item }) => {
	const navigation = useNavigation();
	const filteredMovies = item.filter(movie => movie.data && movie.data.tap && movie.data.tap.includes(label));

	return (
		<Container>
			<Label>{label}</Label>
			<MovieScroll horizontal>
				{filteredMovies.map((movie, id) => {
					return (
						<TouchableOpacity activeOpacity={0.5} key={id} onPress={() => {
							navigation.navigate("ViewMovie", {
								id: movie.data.id,
							})
						}}>
							<MovieCard>
								<MoviePoster resizeMode='cover' source={{ uri: movie.data.banner }} />
							</MovieCard>
						</TouchableOpacity>
					)
				})}
			</MovieScroll>
		</Container>
	)
}

export default Movies