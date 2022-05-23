import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import Texto from '../../components/Texto';
import Detalhes from './components/Detalhes';
import Item from './components/Item';

import Topo from './components/Topo';



export default function Cesta({ topo, detalhes, itens }) {
	return (
		<>
			<FlatList
				data={itens.lista}
				renderItem={Item}
				keyExtractor={({ nome }) => nome}
				style= {estilos.lista}
				ListHeaderComponent={() => {
					return(<>
						<Topo {...topo} />
						<View style={estilos.cesta}>
							<Detalhes {...detalhes} />
							<Texto style={estilos.titulo}>{itens.titulo}</Texto>
						</View>
					</>)
				}}
			/>
		</>
	)
}

const estilos = StyleSheet.create({
	cesta: {
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	titulo: {
		color: "#464646",
		fontWeight: "bold",
		marginTop: 32,
		marginBottom: 8,
		fontSize: 20,
		lineHeight: 32,
	},
	lista: {
		paddingHorizontal:16,
	}

})