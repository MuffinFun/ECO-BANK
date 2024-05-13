const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const UserInfo = sequelize.define('user_info', {
  id_user_info: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [7, 20] },
  },
  check_word: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Faq = sequelize.define('faq', {
  id_faq: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  faq_question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  faq_answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const AvailablePartner = sequelize.define('available_partners', {
  id_available_partner: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  available_partner_name: { type: DataTypes.STRING, allowNull: false },
  available_partner_img: { type: DataTypes.STRING, allowNull: false },
  available_partner_description: { type: DataTypes.STRING, allowNull: false },
});

const AvailableActivitie = sequelize.define('available_activities', {
  id_available_activitie: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  possibe_activitie_name: { type: DataTypes.STRING, allowNull: false },
  possibe_activitie_img: { type: DataTypes.STRING, allowNull: false },
  possibe_activitie_description: { type: DataTypes.STRING, allowNull: false },
});

const AvailableBenefit = sequelize.define('available_benefits', {
  id_available_benefit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  available_benefit_name: { type: DataTypes.STRING, allowNull: false },
  available_benefit_img: { type: DataTypes.STRING, allowNull: false },
  available_benefit_description: { type: DataTypes.STRING, allowNull: false },
});

const UserAccount = sequelize.define('user_accounts', {
  id_account: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  sur_name: { type: DataTypes.STRING, allowNull: false },
  third_name: { type: DataTypes.STRING, defaultValue: 'none' },
  img: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const UserPerson = sequelize.define('user_persons', {
  id_person: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_sex: { type: DataTypes.STRING, defaultValue: 'none' },
  user_age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 16 },
  },
  user_home_adress: { type: DataTypes.STRING, allowNull: false },
  user_phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { len: [11, 16] },
  },
  work_place: { type: DataTypes.STRING },
  work_income: { type: DataTypes.INTEGER, validate: { min: 1 } },
  credit_history: { type: DataTypes.STRING, defaultValue: 'unknown' },
  credit_can_confirmed: { type: DataTypes.BOOLEAN, defaultValue: 'false' },
});

const Company = sequelize.define('companies', {
  id_company: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  company_name: { type: DataTypes.STRING, allowNull: false },
});
const CompanyInfo = sequelize.define('companies_info', {
  id_company_info: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  company_phone_number: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: { len: [11, 16] },
  },
  company_adress: { type: DataTypes.STRING, allowNull: false },
  count_of_buildings: {
    type: DataTypes.STRING,
    defaultValue: 1,
    validate: { min: 1 },
  },
  company_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1 },
  },
});

const AccountFilling = sequelize.define('fillings', {
  id_filling: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fill_name: { type: DataTypes.STRING, allowNull: false },
  fill_percentage: {
    type: DataTypes.INTEGER,
    defaultValue: 3,
    validate: { min: 3, max: 23 },
  },
});
const Credit = sequelize.define('credits', {
  id_credit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  credit_name: { type: DataTypes.STRING, allowNull: false },
  credit_limit: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1000,
      max: 100000,
    },
  },
  credit_sum: { type: DataTypes.INTEGER, validate: { min: 1 } },
});

const BankAccount = sequelize.define('bank_accounts', {
  id_bank_account: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bank_account_name: { type: DataTypes.STRING, allowNull: false },
});
const BankAccountBalance = sequelize.define('bank_accounts_balance', {
  id_bank_balance: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total_balance: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: { min: 0 },
  },
});

const CreditCard = sequelize.define('credit_cards', {
  id_card: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  card_name: { type: DataTypes.STRING, defaultValue: 'Standart' },
  card_img: { type: DataTypes.STRING, allowNull: false },
});
const CreditCardInfo = sequelize.define('credit_cards_info', {
  id_card_info: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  expires_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isAfter: DataTypes.NOW,
    },
  },
  cvv: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 100, max: 999 },
  },
  pincode: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1000, max: 9999 },
  },
  nfc: { type: DataTypes.BOOLEAN, defaultValue: false },
});

const CreditCardType = sequelize.define('cards_types', {
  id_card_type: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  card_type_name: { type: DataTypes.STRING, allowNull: false },
  type_img: { type: DataTypes.STRING, allowNull: false },
});

const Bill = sequelize.define('bills', {
  id_bill: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bill_name: { type: DataTypes.STRING, allowNull: false },
  bill_img: { type: DataTypes.STRING, allowNull: false },
});
const BillInfo = sequelize.define('bills_info', {
  id_billInfo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bill_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { notNull: { msg: 'enter correct sum!' }, min: 1 },
  },
  bill_autopay: { type: DataTypes.BOOLEAN, defaultValue: false },
  bill_checknum: { type: DataTypes.INTEGER, allowNull: false },
  operation_card_name: { type: DataTypes.STRING, allowNull: false },
});

const Tax = sequelize.define('tax', {
  id_tax: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tax_name: { type: DataTypes.STRING, allowNull: false },
  tax_img: { type: DataTypes.STRING, allowNull: false },
});
const TaxInfo = sequelize.define('tax_info', {
  id_tax_info: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tax_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { notNull: { msg: 'enter correct sum!' }, min: 1 },
  },
  tax_autopay: { type: DataTypes.BOOLEAN, defaultValue: false },
  tax_checknum: { type: DataTypes.INTEGER, allowNull: false },
  operation_card_name: { type: DataTypes.STRING, allowNull: false },
});

const Fees = sequelize.define('fees', {
  id_fees: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fees_name: { type: DataTypes.STRING, allowNull: false },
  fees_img: { type: DataTypes.STRING, allowNull: false },
});
const FeesInfo = sequelize.define('fees_info', {
  id_feesInfo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fees_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { notNull: { msg: 'enter correct sum!' }, min: 1 },
  },
  fees_autopay: { type: DataTypes.BOOLEAN, defaultValue: false },
  fees_checknum: { type: DataTypes.INTEGER, allowNull: false },
  operation_card_name: { type: DataTypes.STRING, allowNull: false },
});

const OnlinePayment = sequelize.define('online_payments', {
  id_payment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  payment_name: { type: DataTypes.STRING, allowNull: false },
  payment_img: { type: DataTypes.STRING, allowNull: false },
});
const OnlinePaymentInfo = sequelize.define('online_payments_info', {
  id_payment_info: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  payment_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { notNull: { msg: 'enter correct sum!' }, min: 1 },
  },
  payment_autopay: { type: DataTypes.BOOLEAN, defaultValue: false },
  payment_checknum: { type: DataTypes.INTEGER, allowNull: false },
  operation_card_name: { type: DataTypes.STRING, allowNull: false },
});

const UserMessage = sequelize.define('user_messages', {
  id_message: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: { type: DataTypes.STRING, allowNull: false },
});

const Transaction = sequelize.define('transactions', {
  id_transaction: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  transaction_type: { type: DataTypes.STRING, allowNull: false },
  transaction_sum: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1, notNull: { msg: 'enter correct sum!' } },
  },
});
const TransactionInfo = sequelize.define('transactions_info', {
  id_transaction_info: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  purpose: { type: DataTypes.STRING, allowNull: false },
  checknum: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 100000000, max: 999999999 },
  },
  bank_comission: {
    type: DataTypes.INTEGER,
    defaultValue: 2,
    validate: { min: 2, max: 13 },
  },
  transaction_description: { type: DataTypes.STRING, defaultValue: 'none' },
});

const Activitie = sequelize.define('activities', {
  id_activitie: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  activitie_name: { type: DataTypes.STRING, allowNull: false },
  activitie_img: { type: DataTypes.STRING, allowNull: false },
});
const Partner = sequelize.define('partners', {
  id_partner: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  partner_name: { type: DataTypes.STRING, allowNull: false },
  partner_img: { type: DataTypes.STRING, allowNull: false },
});
const Benefit = sequelize.define('benefits', {
  id_benefit: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  benefit_name: { type: DataTypes.STRING, allowNull: false },
  benefit_img: { type: DataTypes.STRING, allowNull: false },
});
const Offer = sequelize.define('offers', {
  id_offer: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  offer_name: { type: DataTypes.STRING, allowNull: false },
  offer_img: { type: DataTypes.STRING, allowNull: false },
});
const OfferInfo = sequelize.define('offer_info', {
  id_offer_info: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  offer_type: { type: DataTypes.STRING, allowNull: false },
  offer_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: 'incorrect offer price!' },
      min: 1,
    },
  },
  offer_comission: {
    type: DataTypes.INTEGER,
    defaultValue: 2,
    validate: { min: 2, max: 13 },
  },
  longterm: { type: DataTypes.BOOLEAN, allowNull: false },
  offer_confirmed: { type: DataTypes.BOOLEAN, allowNull: false },
  offer_description: { type: DataTypes.STRING, defaultValue: 'none' },
});

const PersonPartner = sequelize.define(
  'person_partner',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { createdAt: false }
);
const PersonActivitie = sequelize.define(
  'person_activitie',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { createdAt: false }
);
const PersonBenefit = sequelize.define(
  'person_benefit',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { createdAt: false }
);

const CompanyPartner = sequelize.define(
  'company_partner',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { createdAt: false }
);
const CompanyActivitie = sequelize.define(
  'company_activitie',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { createdAt: false }
);
const CompanyBenefit = sequelize.define(
  'company_benefit',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  { createdAt: false }
);

UserAccount.hasOne(UserPerson, { foreignKey: 'account_id' });
UserPerson.belongsTo(UserAccount, { foreignKey: 'account_id' });

UserPerson.hasMany(AccountFilling), { foreignKey: 'person_fill_id' };
AccountFilling.belongsTo(UserPerson, { foreignKey: 'person_fill_id' });

UserPerson.hasMany(Credit, { foreignKey: 'person_credit_id' });
Credit.belongsTo(UserPerson, { foreignKey: 'person_credit_id' });

UserPerson.hasMany(OnlinePayment, { foreignKey: 'person_payment_id' });
OnlinePayment.belongsTo(UserPerson, { foreignKey: 'person_payment_id' });

OnlinePayment.hasOne(OnlinePaymentInfo, {
  foreignKey: 'payment_id',
  as: 'payment_info',
});
OnlinePaymentInfo.belongsTo(OnlinePayment, {
  foreignKey: 'payment_id',
  as: 'payment_info',
});

UserPerson.hasMany(Bill, { foreignKey: 'person_bill_id' });
Bill.belongsTo(UserPerson, { foreignKey: 'person_bill_id' });

Bill.hasOne(BillInfo, { foreignKey: 'bill_id', as: 'bill_info' });
BillInfo.belongsTo(Bill, { foreignKey: 'bill_id', as: 'bill_info' });

UserPerson.hasMany(Tax, { foreignKey: 'person_tax_id' });
Tax.belongsTo(UserPerson, { foreignKey: 'person_tax_id' });

Tax.hasOne(TaxInfo, { foreignKey: 'tax_id', as: 'tax_info' });
TaxInfo.belongsTo(Tax, { foreignKey: 'tax_id', as: 'tax_info' });

UserPerson.hasMany(Fees, { foreignKey: 'person_fees_id' });
Fees.belongsTo(UserPerson, { foreignKey: 'person_fees_id' });

Fees.hasOne(FeesInfo, { foreignKey: 'fees_id', as: 'fees_info' });
FeesInfo.belongsTo(Fees, { foreignKey: 'fees_id', as: 'fees_info' });

UserPerson.hasMany(UserMessage, { foreignKey: 'person_message_id' });
UserMessage.belongsTo(UserPerson, { foreignKey: 'person_message_id' });

UserAccount.hasMany(BankAccount, { foreignKey: 'user_bank_id' });
BankAccount.belongsTo(UserAccount, { foreignKey: 'user_bank_id' });

BankAccount.hasOne(BankAccountBalance, {
  foreignKey: 'bank_id',
  as: 'bank_balance',
});
BankAccountBalance.belongsTo(BankAccount, {
  foreignKey: 'bank_id',
  as: 'bank_balance',
});

BankAccount.hasMany(CreditCard, { foreignKey: 'bank_card_id' });
CreditCard.belongsTo(BankAccount, { foreignKey: 'bank_card_id' });

CreditCard.hasOne(CreditCardInfo, {
  foreignKey: 'card_id',
  as: 'credit_card_info',
});
CreditCardInfo.belongsTo(CreditCard, {
  foreignKey: 'card_id',
  as: 'credit_card_info',
});

CreditCardInfo.hasMany(CreditCardType, {
  foreignKey: 'card_info_id',
  as: 'credit_card_type_info',
});
CreditCardType.belongsTo(CreditCardInfo, {
  foreignKey: 'card_info_id',
  as: 'credit_card_type_info',
});

UserAccount.hasMany(Company, { foreignKey: 'user_company_id' });
Company.belongsTo(Company, { foreignKey: 'user_company_id' });

Company.hasOne(CompanyInfo, {
  foreignKey: 'company_id',
  as: 'company_info',
});
CompanyInfo.belongsTo(Company, {
  foreignKey: 'company_id',
  as: 'company_info',
});
Company.hasMany(Offer, { foreignKey: 'company_offer_id' });
Offer.belongsTo(Company, { foreignKey: 'company_offer_id' });

UserPerson.hasMany(Offer, { foreignKey: 'person_offer_id' });
Offer.belongsTo(UserPerson, { foreignKey: 'person_offer_id' });

Offer.hasOne(OfferInfo, { foreignKey: 'offer_id', as: 'offer_info' });
OfferInfo.belongsTo(Offer, { foreignKey: 'offer_id', as: 'offer_info' });

Transaction.hasOne(TransactionInfo, {
  foreignKey: 'transaction_id',
  as: 'transaction_info',
});
TransactionInfo.belongsTo(Transaction, {
  foreignKey: 'transaction_id',
  as: 'transaction_info',
});

UserPerson.hasMany(Transaction, { foreignKey: 'person_transaction_id' });
Transaction.belongsTo(UserPerson, { foreignKey: 'person_transaction_id' });

Company.hasMany(Transaction, { foreignKey: 'company_transaction_id' });
Transaction.belongsTo(Company, { foreignKey: 'company_transaction_id' });

Partner.belongsToMany(UserPerson, { through: PersonPartner });
UserPerson.belongsToMany(Partner, { through: PersonPartner });

Activitie.belongsToMany(UserPerson, { through: PersonActivitie });
UserPerson.belongsToMany(Activitie, { through: PersonActivitie });

Benefit.belongsToMany(UserPerson, { through: PersonBenefit });
UserPerson.belongsToMany(Benefit, { through: PersonBenefit });

Partner.belongsToMany(Company, { through: CompanyPartner });
Company.belongsToMany(Partner, { through: CompanyPartner });

Activitie.belongsToMany(Company, { through: CompanyActivitie });
Company.belongsToMany(Activitie, { through: CompanyActivitie });

Benefit.belongsToMany(Company, { through: CompanyBenefit });
Company.belongsToMany(Benefit, { through: CompanyBenefit });

module.exports = {
  AvailableActivitie,
  AvailableBenefit,
  AvailablePartner,
  UserInfo,
  Faq,
  UserAccount,
  UserMessage,
  UserPerson,
  Company,
  CompanyInfo,
  Bill,
  BillInfo,
  Tax,
  TaxInfo,
  Fees,
  FeesInfo,
  OnlinePayment,
  OnlinePaymentInfo,
  Transaction,
  TransactionInfo,
  Partner,
  Benefit,
  Activitie,
  Offer,
  OfferInfo,
  BankAccount,
  BankAccountBalance,
  CreditCard,
  CreditCardInfo,
  CreditCardType,
  AccountFilling,
  Credit,
  PersonPartner,
};
