const CertificateCard = ({ title, description, verifyUrl, platform }) => {
  return (
    <div className="w-80 md:w-[420px] bg-white dark:bg-[#1f2642] border-2 border-[#465697] dark:border-gray-600 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">

      <h3 className="text-lg font-bold md:text-xl text-[#465697] dark:text-white">
        {title}
      </h3>
      <p className='text-sm md:text-md mt-1 leading-tight dark:text-slate-400 text-slate-600'>
        {platform}</p>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>

      {verifyUrl && (
        <a
          href={verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm font-medium dark:text-white px-3 py-1.5 border-[#465697] text-[#35447a] border-t-2 border-b-2 rounded-xl dark:hover:bg-[#35447a] transition hover:scale-105 duration-300"
        >
          Verify Certificate
        </a>
      )}
    </div>
  )
}

// proptype validation - used to ensure correct prop types
// proptypes is used to ensure that the props passed to the component are of the correct type
import PropTypes from 'prop-types';

// Define prop types for the component
CertificateCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  verifyUrl: PropTypes.string,
  platform: PropTypes.string.isRequired,
};

export default CertificateCard

