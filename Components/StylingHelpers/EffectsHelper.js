/**
 * Wraps a <span> element around the children and styles the element using
 * sheets also attaching any localVars to element.
 * @param {String} sheets Generated Style Sheets to be used for styling
 * @param {Object} localVars Any additional --var() to attach to the generated stylesheet
 */
const EffectsHelper = ({ sheets, localVars, children }) => {
	/**
	 * Compiles localVars and styling to pass to html tag
	 * @returns Compiled Props
	 */
	const generateAttrs = () => {
		// Attach generated style sheet
		let result = { className: sheets };
		if (!localVars) return result;
		// Construct Style Object to hold new vars
		let newVars = {};
		for (const property in localVars) {
			newVars[`--${property}`] = `${localVars[property]}`;
		}
		// console.log({ style: { ...newVars }, ...result });
		return { style: { ...newVars }, ...result };
	};

	return <span {...generateAttrs()}>{children}</span>;
};

export default EffectsHelper;
