/**
 * Types of DC motor control
 */
enum DCmotion {
	//% block="On"
	On,
	//% block="Off"
	Off
}

enum connectorDCMotor {
	//% block="P0"
	P0,
	//% block="P1"
	P1,
	//% block="P2"
	P2
}


/**
 * ArtecRobo control package
 */
//% color=#5b99a5 weight=100 icon="\uf009" block="ArtecRobo"
namespace artecrobo {

	/* spped initial value */
	
	

	// Move DC motor
	//% blockId=artec_move_dc_motor
	//% block="DC motor %_connector| motion: %_motion"
	export function moveDCMotor(_connector: connectorDCMotor, _motion: DCmotion): void {
		switch(_motion) {
			case DCmotion.On:
				
				pins.digitalWritePin(DigitalPin._connector, 1);

				
				break;
			case DCmotion.Off:
				
				pins.digitalWritePin(DigitalPin._connector, 0);
				break;
		}

	}

	//% blockId=artec_set_speed_dc_motor
	//% block="DC motor %_connector| speed: %_speed"
	//% _speed.min=0 _speed.max=1023
	

}
