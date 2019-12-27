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
	//% block="M1"
	P0,
	//% block="M2"
	P1
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
				/*
					Move On
					M1:P8 = speed, P12 = 0
					M2:P0 = speed, P16 = 0
				*/
				pins.digitalWritePin(DigitalPin._connector, 1);

				
				break;
			case DCmotion.Off:
				/*
					Move Off
					M1:P8 = 0, P12 = speeed
					M2:P0 = 0, P16 = speeed
				*/
				pins.digitalWritePin(DigitalPin._connector, 0);
				break;
		}

	}

	//% blockId=artec_set_speed_dc_motor
	//% block="DC motor %_connector| speed: %_speed"
	//% _speed.min=0 _speed.max=1023
	

}
