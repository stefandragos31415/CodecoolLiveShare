import React, { useState, useEffect } from "react";

export default function useStock(data) {
	if (!data) {
		return;
	}
	if (Number(data.stock) < 100) {
		return "red";
	} else if (Number(data.stock) < 200) {
		return "blue";
	} else {
		return "green";
	}
}
