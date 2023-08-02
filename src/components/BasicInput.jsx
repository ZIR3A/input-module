import React from 'react';
import PropTypes from 'prop-types';

const BasicInput = (props) => {
    let { name, onChange, label, value, error, type, disabled, placeholder, className, min, onFocus, autoComplete, required, tooltip, ref, ...others } = props;

    return (
        <div className="mt-0">
            <div className={`${className ? className : 'form-group mb-4'}`}>
                {label && <label htmlFor={name}>{label} {required && <span className="text-danger">*</span>}</label>} from package
                {tooltip}
                <input
                    className={`form-control ${className ? 'p-0' : ''} ${error && 'is-invalid'}`}
                    name={name}
                    min={min}
                    onFocus={onFocus}
                    value={value}
                    type={type ? type : 'text'}
                    onChange={onChange}
                    id={name}
                    required={required}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    ref={ref}
                    {...others}
                />
                <div id="invalidBox" data-testid="invalidBox" className="invalidBox" style={{ minHeight: '24px', position: 'absolute' }}>
                    {error && <small className="text-danger">{error}</small>}
                </div>

            </div>
        </div>
    )
}


BasicInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.any.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onFocus: PropTypes.func,
    autoComplete: PropTypes.string,
    min: PropTypes.number,
    required: PropTypes.bool,
    tooltip: PropTypes.any,
    ref: PropTypes.any
};

export default BasicInput