import React, { useEffect, useRef } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';
import Konva from 'konva';

const ImageElement = ({
	src,
	id,
	x,
	y,
	width,
	height,
	red,
	green,
	blue,
	alpha,
	icon,
	onPositionChange,
	selected,
	onResize,
	onSelect,
}) => {
	const imageRef = useRef();
	const trRef = useRef();
	const [image] = useImage(src, 'anonymous');

	console.log(red, green, blue, alpha);
	useEffect(() => {
		if (selected) {
			// we need to attach transformer manually
			trRef.current.nodes([imageRef.current]);
			trRef.current.getLayer().batchDraw();
		}
	}, [selected]);

	useEffect(() => {
		if (image) {
			// ver si se puede resetear el filtro 0,0,0 para asi poder aplicar filtros de colores
			imageRef.current.cache();
			imageRef.current.red(red);
			imageRef.current.green(green);
			imageRef.current.blue(blue);
			imageRef.current.alpha(alpha);
		}
		// eslint-disable-next-line
	}, [image, red, green, blue, alpha]);

	return (
		<>
			<Image
				draggable
				onClick={() => onSelect(id)}
				onTap={() => onSelect(id)}
				x={x}
				y={y}
				filters={[Konva.Filters.RGBA]}
				image={image}
				ref={imageRef}
				width={width}
				height={height}
				onDragEnd={(e) =>
					onPositionChange({ x: e.target.x(), y: e.target.y(), id })
				}
			/>
			{selected && (
				<Transformer
					ref={trRef}
					rotateEnabled={true}
					enabledAnchors={[
						'top-left',
						'top-right',
						'top-center',
						'middle-left',
						'middle-right',
						'bottom-center',
						'bottom-right',
						'bottom-left',
					]}
					boundBoxFunc={(oldBox, newBox) => {
						const node = imageRef.current;
						const scaleX = node.scaleX();
						const scaleY = node.scaleY();
						onResize({
							x: node.x(),
							y: node.y(),
							width: Math.max(5, node.width() * scaleX),
							height: Math.max(node.height() * scaleY),
						});
						// limit resize
						if (newBox.width < 5 || newBox.height < 5) {
							return oldBox;
						}
						return newBox;
					}}
				/>
			)}
		</>
	);
};

export default ImageElement;
